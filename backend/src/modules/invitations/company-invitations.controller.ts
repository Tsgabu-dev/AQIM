import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { InvitationsService } from './invitations.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller({
  path: 'companies/:companyId/invitations',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class CompanyInvitationsController {
  constructor(
    private readonly invitationsService: InvitationsService,
  ) {}

  @Post()
  createInvitation(
    @Param('companyId') companyId: string,
    @Body() dto: CreateInvitationDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.invitationsService.createInvitation(
      companyId,
      req.user.userId,
      dto,
    );
  }

  @Get()
  getCompanyInvitations(
    @Param('companyId') companyId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.invitationsService.getCompanyInvitations(
      companyId,
      req.user.userId,
    );
  }

  @Post(':invitationId/resend')
  resendInvitation(
    @Param('companyId') companyId: string,
    @Param('invitationId') invitationId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.invitationsService.resendInvitation(
      companyId,
      invitationId,
      req.user.userId,
    );
  }

  @Delete(':invitationId')
  revokeInvitation(
    @Param('companyId') companyId: string,
    @Param('invitationId') invitationId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.invitationsService.revokeInvitation(
      companyId,
      invitationId,
      req.user.userId,
    );
  }
}