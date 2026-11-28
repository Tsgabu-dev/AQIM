import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesPermissionsService {
  constructor(private readonly prisma: PrismaService) {}

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

  private async findCompanyRole(
    companyId: string,
    roleId: string,
  ) {
    const role = await this.prisma.role.findFirst({
      where: {
        id: roleId,
        companyId,
      },
      include: {
        rolePermissions: {
          include: {
            permission: true,
          },
        },
      },
    });

    if (!role) {
      throw new NotFoundException('Role not found.');
    }

    return role;
  }

  // CREATE ROLE
  async createRole(
    companyId: string,
    userId: string,
    dto: CreateRoleDto,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const name = dto.name.trim();

    const existing = await this.prisma.role.findUnique({
      where: {
        companyId_name: {
          companyId,
          name,
        },
      },
    });

    if (existing) {
      throw new ConflictException(
        'A role with this name already exists.',
      );
    }

    return this.prisma.role.create({
      data: {
        companyId,
        name,
        description: dto.description?.trim(),
      },
    });
  }

  // LIST COMPANY ROLES
  async getCompanyRoles(
    companyId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    return this.prisma.role.findMany({
      where: { companyId },
      include: {
        rolePermissions: {
          include: {
            permission: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  // GET SINGLE ROLE
  async getRole(
    companyId: string,
    roleId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    return this.findCompanyRole(companyId, roleId);
  }

  // UPDATE ROLE
  async updateRole(
    companyId: string,
    roleId: string,
    userId: string,
    dto: UpdateRoleDto,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const role = await this.findCompanyRole(companyId, roleId);

    const name = dto.name?.trim();

    if (name && name !== role.name) {
      const existing = await this.prisma.role.findUnique({
        where: {
          companyId_name: {
            companyId,
            name,
          },
        },
      });

      if (existing) {
        throw new ConflictException(
          'A role with this name already exists.',
        );
      }
    }

    return this.prisma.role.update({
      where: { id: roleId },
      data: {
        ...(name !== undefined && { name }),
        ...(dto.description !== undefined && {
          description: dto.description?.trim() || null,
        }),
      },
    });
  }

  // DELETE ROLE
  async deleteRole(
    companyId: string,
    roleId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const role = await this.findCompanyRole(companyId, roleId);

    if (role.isSystem) {
      throw new ConflictException(
        'System roles cannot be deleted.',
      );
    }

    await this.prisma.role.delete({
      where: { id: roleId },
    });

    return {
      message: 'Role deleted successfully.',
    };
  }

  // LIST GLOBAL PERMISSIONS
  async getPermissions() {
    return this.prisma.permission.findMany({
      orderBy: {
        key: 'asc',
      },
    });
  }

  // ASSIGN PERMISSIONS TO ROLE
  async assignPermissions(
    companyId: string,
    roleId: string,
    userId: string,
    permissionIds: string[],
  ) {
    await this.ensureActiveMember(companyId, userId);

    await this.findCompanyRole(companyId, roleId);

    const uniqueIds = [...new Set(permissionIds)];

    const permissions = await this.prisma.permission.count({
      where: {
        id: { in: uniqueIds },
      },
    });

    if (permissions !== uniqueIds.length) {
      throw new NotFoundException(
        'One or more permissions were not found.',
      );
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.rolePermission.deleteMany({
        where: { roleId },
      });

      if (uniqueIds.length > 0) {
        await tx.rolePermission.createMany({
          data: uniqueIds.map((permissionId) => ({
            roleId,
            permissionId,
          })),
        });
      }
    });

    return this.findCompanyRole(companyId, roleId);
  }

  // ASSIGN ROLE TO MEMBERSHIP
  async assignRole(
    companyId: string,
    membershipId: string,
    userId: string,
    roleId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const membership = await this.prisma.membership.findFirst({
      where: {
        id: membershipId,
        companyId,
        status: 'ACTIVE',
      },
    });

    if (!membership) {
      throw new NotFoundException(
        'Active company membership not found.',
      );
    }

    await this.findCompanyRole(companyId, roleId);

    const existing = await this.prisma.membershipRole.findUnique({
      where: {
        membershipId_roleId: {
          membershipId,
          roleId,
        },
      },
    });

    if (existing) {
      throw new ConflictException(
        'This role is already assigned to this member.',
      );
    }

    return this.prisma.membershipRole.create({
      data: {
        membershipId,
        roleId,
      },
      include: {
        role: true,
        membership: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  // REMOVE ROLE FROM MEMBERSHIP
  async removeRole(
    companyId: string,
    membershipId: string,
    roleId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const membership = await this.prisma.membership.findFirst({
      where: {
        id: membershipId,
        companyId,
      },
    });

    if (!membership) {
      throw new NotFoundException('Membership not found.');
    }

    await this.findCompanyRole(companyId, roleId);

    const assignment = await this.prisma.membershipRole.findUnique({
      where: {
        membershipId_roleId: {
          membershipId,
          roleId,
        },
      },
    });

    if (!assignment) {
      throw new NotFoundException(
        'This role is not assigned to the membership.',
      );
    }

    await this.prisma.membershipRole.delete({
      where: {
        membershipId_roleId: {
          membershipId,
          roleId,
        },
      },
    });

    return {
      message: 'Role removed successfully.',
    };
  }
}