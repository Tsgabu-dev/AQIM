import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

import { PrismaService } from '../../../database/prisma.service';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
  params: {
    companyId?: string;
  };
}

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions =
      this.reflector.getAllAndOverride<string[]>(
        PERMISSIONS_KEY,
        [
          context.getHandler(),
          context.getClass(),
        ],
      );

    if (!requiredPermissions?.length) {
      return true;
    }

    const request =
      context.switchToHttp().getRequest<AuthenticatedRequest>();

    const userId = request.user?.userId;
    const companyId = request.params?.companyId;

    if (!userId || !companyId) {
      throw new ForbiddenException(
        'User or company context is missing.',
      );
    }

    const membership = await this.prisma.membership.findFirst({
      where: {
        userId,
        companyId,
        status: 'ACTIVE',
      },
      include: {
        membershipRoles: {
          include: {
            role: {
              include: {
                rolePermissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!membership) {
      throw new ForbiddenException(
        'You are not an active member of this company.',
      );
    }

    const userPermissions = new Set(
      membership.membershipRoles.flatMap((membershipRole) =>
        membershipRole.role.rolePermissions.map(
          (rolePermission) => rolePermission.permission.key,
        ),
      ),
    );

    const hasAllPermissions = requiredPermissions.every(
      (permission) => userPermissions.has(permission),
    );

    if (!hasAllPermissions) {
      throw new ForbiddenException(
        'You do not have the required permissions.',
      );
    }

    return true;
  }
}