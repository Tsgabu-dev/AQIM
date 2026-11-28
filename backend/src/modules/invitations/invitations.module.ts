import { Module } from '@nestjs/common';
import { PrismaModule } from '../../database/prisma.module';
import { CompanyInvitationsController } from './company-invitations.controller';
import { InvitationsController } from './invitations.controller';
import { InvitationsService } from './invitations.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    CompanyInvitationsController,
    InvitationsController,
  ],
  providers: [InvitationsService],
  exports: [InvitationsService],
})
export class InvitationsModule {}