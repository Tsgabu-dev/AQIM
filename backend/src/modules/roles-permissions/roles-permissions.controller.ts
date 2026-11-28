import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesPermissionsService } from './roles-permissions.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { AssignPermissionsDto } from './dto/assign-permissions.dto';
import { AssignRoleDto } from './dto/assign-role.dto';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller({
  path: 'companies/:companyId/roles',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class RolesPermissionsController {
  constructor(
    private readonly service: RolesPermissionsService,
  ) {}

  @Post()
  createRole(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Body() dto: CreateRoleDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.createRole(
      companyId,
      req.user.userId,
      dto,
    );
  }

  @Get()
  getCompanyRoles(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.getCompanyRoles(
      companyId,
      req.user.userId,
    );
  }

  @Get(':roleId')
  getRole(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.getRole(
      companyId,
      roleId,
      req.user.userId,
    );
  }

  @Patch(':roleId')
  updateRole(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Body() dto: UpdateRoleDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.updateRole(
      companyId,
      roleId,
      req.user.userId,
      dto,
    );
  }

  @Delete(':roleId')
  deleteRole(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.deleteRole(
      companyId,
      roleId,
      req.user.userId,
    );
  }

  @Put(':roleId/permissions')
  assignPermissions(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Body() dto: AssignPermissionsDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.assignPermissions(
      companyId,
      roleId,
      req.user.userId,
      dto.permissionIds,
    );
  }

  @Post(':roleId/members/:membershipId')
  assignRole(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Param('membershipId', ParseUUIDPipe) membershipId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.assignRole(
      companyId,
      membershipId,
      req.user.userId,
      roleId,
    );
  }

  @Delete(':roleId/members/:membershipId')
  removeRole(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Param('roleId', ParseUUIDPipe) roleId: string,
    @Param('membershipId', ParseUUIDPipe) membershipId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.service.removeRole(
      companyId,
      membershipId,
      roleId,
      req.user.userId,
    );
  }
}