import { Module } from '@nestjs/common';

import { PrismaModule } from '../../database/prisma.module';
import { MembershipsController } from './memberships.controller';
import { CompanyMembershipsController } from './company-memberships.controller';
import { MembershipsService } from './memberships.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    MembershipsController,
    CompanyMembershipsController,
  ],
  providers: [MembershipsService],
  exports: [MembershipsService],
})
export class MembershipsModule {}