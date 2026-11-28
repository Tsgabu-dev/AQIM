import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { createHash, randomBytes } from 'node:crypto';
import { PrismaService } from '../../database/prisma.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';

@Injectable()
export class InvitationsService {
  private readonly invitationExpirationDays = 7;

  constructor(private readonly prisma: PrismaService) {}

  private hashToken(token: string): string {
    return createHash('sha256').update(token).digest('hex');
  }

  private generateToken(): string {
    return randomBytes(32).toString('hex');
  }

  private getExpirationDate(): Date {
    const expiresAt = new Date();
    expiresAt.setDate(
      expiresAt.getDate() + this.invitationExpirationDays,
    );
    return expiresAt;
  }

  private async ensureActiveMember(
    companyId: string,
    userId: string,
  ): Promise<void> {
    const membership = await this.prisma.membership.findUnique({
      where: {
        userId_companyId: {
          userId,
          companyId,
        },
      },
    });

    if (!membership || membership.status !== 'ACTIVE') {
      throw new ForbiddenException(
        'You are not an active member of this company.',
      );
    }
  }

  async createInvitation(
    companyId: string,
    userId: string,
    dto: CreateInvitationDto,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const email = dto.email.trim().toLowerCase();

    const existingInvitation =
      await this.prisma.invitation.findFirst({
        where: {
          companyId,
          email,
          status: 'PENDING',
        },
      });

    if (existingInvitation) {
      if (existingInvitation.expiresAt > new Date()) {
        throw new ConflictException(
          'A pending invitation already exists for this email.',
        );
      }

      await this.prisma.invitation.update({
        where: { id: existingInvitation.id },
        data: { status: 'EXPIRED' },
      });
    }

    const token = this.generateToken();

    const invitation = await this.prisma.invitation.create({
      data: {
        companyId,
        invitedById: userId,
        email,
        tokenHash: this.hashToken(token),
        expiresAt: this.getExpirationDate(),
      },
      select: {
        id: true,
        companyId: true,
        email: true,
        status: true,
        expiresAt: true,
        createdAt: true,
      },
    });

    return {
      message: 'Invitation created successfully.',
      invitation,
      token,
    };
  }

  async getCompanyInvitations(
    companyId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    return this.prisma.invitation.findMany({
      where: { companyId },
      select: {
        id: true,
        email: true,
        status: true,
        expiresAt: true,
        acceptedAt: true,
        revokedAt: true,
        createdAt: true,
        invitedBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async resendInvitation(
    companyId: string,
    invitationId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const invitation = await this.prisma.invitation.findFirst({
      where: {
        id: invitationId,
        companyId,
      },
    });

    if (!invitation) {
      throw new NotFoundException('Invitation not found.');
    }

    if (
      invitation.status === 'ACCEPTED' ||
      invitation.status === 'REVOKED'
    ) {
      throw new ConflictException(
        'This invitation cannot be resent.',
      );
    }

    const token = this.generateToken();

    const updatedInvitation =
      await this.prisma.invitation.update({
        where: { id: invitationId },
        data: {
          tokenHash: this.hashToken(token),
          status: 'PENDING',
          expiresAt: this.getExpirationDate(),
          acceptedAt: null,
          revokedAt: null,
        },
        select: {
          id: true,
          companyId: true,
          email: true,
          status: true,
          expiresAt: true,
          createdAt: true,
        },
      });

    return {
      message: 'Invitation resent successfully.',
      invitation: updatedInvitation,
      token,
    };
  }

  async revokeInvitation(
    companyId: string,
    invitationId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const invitation = await this.prisma.invitation.findFirst({
      where: {
        id: invitationId,
        companyId,
      },
    });

    if (!invitation) {
      throw new NotFoundException('Invitation not found.');
    }

    if (invitation.status === 'ACCEPTED') {
      throw new ConflictException(
        'An accepted invitation cannot be revoked.',
      );
    }

    if (invitation.status === 'REVOKED') {
      throw new ConflictException(
        'This invitation has already been revoked.',
      );
    }

    return this.prisma.invitation.update({
      where: { id: invitationId },
      data: {
        status: 'REVOKED',
        revokedAt: new Date(),
      },
      select: {
        id: true,
        email: true,
        status: true,
        revokedAt: true,
      },
    });
  }

  async acceptInvitation(token: string, userId: string) {
    if (!token || token.length !== 64) {
      throw new BadRequestException('Invalid invitation token.');
    }

    const tokenHash = this.hashToken(token);

    return this.prisma.$transaction(async (tx) => {
      const invitation = await tx.invitation.findUnique({
        where: { tokenHash },
      });

      if (!invitation) {
        throw new NotFoundException(
          'Invitation not found or token is invalid.',
        );
      }

      if (invitation.status !== 'PENDING') {
        throw new ConflictException(
          'This invitation is no longer pending.',
        );
      }

      if (invitation.expiresAt <= new Date()) {
        throw new BadRequestException(
          'This invitation has expired.',
        );
      }

      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { id: true, email: true },
      });

      if (!user) {
        throw new NotFoundException('User not found.');
      }

      if (
        user.email.trim().toLowerCase() !==
        invitation.email.toLowerCase()
      ) {
        throw new ForbiddenException(
          'Your account email does not match the invited email.',
        );
      }

      const membership = await tx.membership.upsert({
        where: {
          userId_companyId: {
            userId,
            companyId: invitation.companyId,
          },
        },
        create: {
          userId,
          companyId: invitation.companyId,
          status: 'ACTIVE',
          joinedAt: new Date(),
        },
        update: {
          status: 'ACTIVE',
          joinedAt: new Date(),
        },
        include: {
          company: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
      });

      const updated = await tx.invitation.updateMany({
        where: {
          id: invitation.id,
          status: 'PENDING',
          expiresAt: { gt: new Date() },
        },
        data: {
          status: 'ACCEPTED',
          acceptedAt: new Date(),
        },
      });

      if (updated.count !== 1) {
        throw new ConflictException(
          'This invitation has already been used or expired.',
        );
      }

      return {
        message: 'Invitation accepted successfully.',
        membership,
      };
    });
  }
}