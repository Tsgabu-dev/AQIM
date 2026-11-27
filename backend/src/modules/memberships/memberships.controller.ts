import {
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { MembershipsService } from './memberships.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller({
  path: 'memberships',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class MembershipsController {
  constructor(
    private readonly membershipsService: MembershipsService,
  ) {}

  @Get('me')
  getMyMemberships(@Req() req: AuthenticatedRequest) {
    return this.membershipsService.getMyMemberships(
      req.user.userId,
    );
  }

  @Patch(':membershipId/accept')
  acceptInvitation(
    @Param('membershipId', ParseUUIDPipe)
    membershipId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.membershipsService.acceptInvitation(
      membershipId,
      req.user.userId,
    );
  }

  @Delete(':membershipId/leave')
  leaveCompany(
    @Param('membershipId', ParseUUIDPipe)
    membershipId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.membershipsService.leaveCompany(
      membershipId,
      req.user.userId,
    );
  }
}