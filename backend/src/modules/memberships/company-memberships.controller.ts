import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { InviteMemberDto } from './dto/invite-member.dto';
import { MembershipsService } from './memberships.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller({
  path: 'companies/:companyId/memberships',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class CompanyMembershipsController {
  constructor(
    private readonly membershipsService: MembershipsService,
  ) {}

  @Get()
  getCompanyMembers(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.membershipsService.getCompanyMembers(
      companyId,
      req.user.userId,
    );
  }

  @Post()
  inviteMember(
    @Param('companyId', ParseUUIDPipe) companyId: string,
    @Body() dto: InviteMemberDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.membershipsService.inviteMember(
      companyId,
      req.user.userId,
      dto,
    );
  }
}