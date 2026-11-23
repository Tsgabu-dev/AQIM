import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';

const profileSelect = {
  id: true,
  email: true,
  name: true,
  preferredLanguage: true,
  status: true,
  createdAt: true,
  updatedAt: true,
} satisfies Prisma.UserSelect;

// Authentication data is intentionally selected separately so password hashes
// are never included in a normal user profile response.
const authenticationSelect = {
  id: true,
  email: true,
  passwordHash: true,
  status: true,
} satisfies Prisma.UserSelect;

export type UserProfile = Prisma.UserGetPayload<{
  select: typeof profileSelect;
}>;

export type AuthenticationUser = Prisma.UserGetPayload<{
  select: typeof authenticationSelect;
}>;

export interface CreateUserInput {
  email: string;
  name: string;
  passwordHash: string;
}

export interface UpdateUserProfileInput {
  name?: string;
  preferredLanguage?: 'en' | 'am';
}

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserInput): Promise<UserProfile> {
    const email = input.email.trim().toLowerCase();
    const name = input.name.trim();

    if (!email || !name || !input.passwordHash.trim()) {
      throw new BadRequestException(
        'Email, name, and a password hash are required',
      );
    }

    try {
      return await this.prisma.user.create({
        data: {
          email,
          name,
          passwordHash: input.passwordHash,
        },
        select: profileSelect,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('A user with this email already exists');
      }

      throw error;
    }
  }

  async findProfileById(id: string): Promise<UserProfile | null> {
    return this.prisma.user.findUnique({
      where: { id },
      select: profileSelect,
    });
  }

  async findForAuthentication(
    email: string,
  ): Promise<AuthenticationUser | null> {
    return this.prisma.user.findUnique({
      where: { email: email.trim().toLowerCase() },
      select: authenticationSelect,
    });
  }

  async updateProfile(
    id: string,
    input: UpdateUserProfileInput,
  ): Promise<UserProfile> {
    const data: Prisma.UserUpdateInput = {};

    if (input.name !== undefined) {
      const name = input.name.trim();
      if (!name) {
        throw new BadRequestException('Name cannot be empty');
      }
      data.name = name;
    }

    if (input.preferredLanguage !== undefined) {
      data.preferredLanguage = input.preferredLanguage;
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequestException('At least one profile field is required');
    }

    try {
      return await this.prisma.user.update({
        where: { id },
        data,
        select: profileSelect,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('User not found');
      }

      throw error;
    }
  }
}
