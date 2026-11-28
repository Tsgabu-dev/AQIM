import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma.module';
import { RolesPermissionsController } from './roles-permissions.controller';
import { PermissionsController } from './permissions.controller';
import { RolesPermissionsService } from './roles-permissions.service';
import { PermissionsGuard } from './guards/permissions.guard';

@Module({
  imports: [PrismaModule],
  controllers: [
    RolesPermissionsController,
    PermissionsController,
  ],
  providers: [
    RolesPermissionsService,
    PermissionsGuard,
  ],
  exports: [
    RolesPermissionsService,
    PermissionsGuard,
  ],
})
export class RolesPermissionsModule {}