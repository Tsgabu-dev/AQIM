import {
  Controller,
  Get,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesPermissionsService } from './roles-permissions.service';

@Controller({
  path: 'permissions',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class PermissionsController {
  constructor(
    private readonly service: RolesPermissionsService,
  ) {}

  @Get()
  getPermissions() {
    return this.service.getPermissions();
  }
}