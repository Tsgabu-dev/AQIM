import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AcceptInvitationDto } from './dto/accept-invitation.dto';
import { InvitationsService } from './invitations.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller({
  path: 'invitations',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class InvitationsController {
  constructor(
    private readonly invitationsService: InvitationsService,
  ) {}

  @Post('accept')
  acceptInvitation(
    @Body() dto: AcceptInvitationDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.invitationsService.acceptInvitation(
      dto.token,
      req.user.userId,
    );
  }
}