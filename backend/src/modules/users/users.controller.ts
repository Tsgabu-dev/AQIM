import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type {
  UpdateUserProfileInput,
  UserProfile,
} from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Tenant and authentication guards will be added before this endpoint is
  // used outside the development environment.
  @Get(':id')
  async getProfile(@Param('id') id: string): Promise<UserProfile> {
    const profile = await this.usersService.findProfileById(id);

    if (!profile) {
      throw new NotFoundException('User not found');
    }

    return profile;
  }

  @Patch(':id')
  async updateProfile(
    @Param('id') id: string,
    @Body() input: UpdateUserProfileInput,
  ): Promise<UserProfile> {
    return this.usersService.updateProfile(id, input);
  }
}
