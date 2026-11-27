import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';
import { InviteMemberDto } from './dto/invite-member.dto';

@Injectable()
export class MembershipsService {
  constructor(private readonly prisma: PrismaService) {}

  // Check whether the requester is an active company member.
  private async ensureActiveMember(
    companyId: string,
    userId: string,
  ) {
    const membership = await this.prisma.membership.findFirst({
      where: {
        companyId,
        userId,
        status: 'ACTIVE',
      },
    });

    if (!membership) {
      throw new ForbiddenException(
        'You are not an active member of this company.',
      );
    }

    return membership;
  }

  // Get all company memberships belonging to the current user.
  async getMyMemberships(userId: string) {
    return this.prisma.membership.findMany({
      where: { userId },
      include: {
        company: {
          select: {
            id: true,
            name: true,
            slug: true,
            status: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  // List all members of a company.
  async getCompanyMembers(
    companyId: string,
    requesterId: string,
  ) {
    await this.ensureActiveMember(companyId, requesterId);

    return this.prisma.membership.findMany({
      where: { companyId },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  // Invite an existing AQIM user.
  async inviteMember(
    companyId: string,
    requesterId: string,
    dto: InviteMemberDto,
  ) {
    await this.ensureActiveMember(companyId, requesterId);

    const email = dto.email.trim().toLowerCase();

    const user = await this.prisma.user.findFirst({
      where: { email },
      select: {
        id: true,
        email: true,
      },
    });

    if (!user) {
      throw new NotFoundException(
        'No AQIM user exists with this email address.',
      );
    }

    const existingMembership =
      await this.prisma.membership.findUnique({
        where: {
          userId_companyId: {
            userId: user.id,
            companyId,
          },
        },
      });

    if (existingMembership) {
      throw new ConflictException(
        'This user already has a membership in this company.',
      );
    }

    return this.prisma.membership.create({
      data: {
        userId: user.id,
        companyId,
        status: 'INVITED',
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
          },
        },
      },
    });
  }

  // Accept an invitation belonging to the current user.
  async acceptInvitation(
    membershipId: string,
    userId: string,
  ) {
    const membership = await this.prisma.membership.findUnique({
      where: { id: membershipId },
    });

    if (!membership) {
      throw new NotFoundException('Membership not found.');
    }

    if (membership.userId !== userId) {
      throw new ForbiddenException(
        'You cannot accept another user’s invitation.',
      );
    }

    if (membership.status !== 'INVITED') {
      throw new ConflictException(
        'This membership is not awaiting acceptance.',
      );
    }

    return this.prisma.membership.update({
      where: { id: membershipId },
      data: {
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
  }

  // Allow a user to leave a company.
  async leaveCompany(
    membershipId: string,
    userId: string,
  ) {
    const membership = await this.prisma.membership.findFirst({
      where: {
        id: membershipId,
        userId,
        status: 'ACTIVE',
      },
    });

    if (!membership) {
      throw new NotFoundException(
        'Active membership not found.',
      );
    }

    const activeMembers = await this.prisma.membership.count({
      where: {
        companyId: membership.companyId,
        status: 'ACTIVE',
      },
    });

    if (activeMembers <= 1) {
      throw new ConflictException(
        'The last active company member cannot leave. Transfer company administration first.',
      );
    }

    return this.prisma.membership.delete({
      where: { id: membershipId },
    });
  }
}