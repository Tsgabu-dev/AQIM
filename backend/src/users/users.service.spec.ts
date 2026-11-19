import { ConflictException, NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Prisma } from '../generated/prisma/client';
import { PrismaService } from '../database/prisma.service';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;
  const prisma = {
    user: {
      create: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: prisma,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
  });

  it('normalizes email and excludes password hashes from profiles', async () => {
    prisma.user.create.mockResolvedValue({
      id: 'user-id',
      email: 'person@example.com',
      name: 'Person',
      preferredLanguage: 'en',
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await usersService.create({
      email: '  Person@Example.com ',
      name: ' Person ',
      passwordHash: 'already-hashed',
    });

    expect(prisma.user.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: {
          email: 'person@example.com',
          name: 'Person',
          passwordHash: 'already-hashed',
        },
        select: expect.not.objectContaining({ passwordHash: true }),
      }),
    );
  });

  it('maps duplicate email errors to a conflict', async () => {
    prisma.user.create.mockRejectedValue(
      new Prisma.PrismaClientKnownRequestError('Unique constraint failed', {
        code: 'P2002',
        clientVersion: '7.0.0',
      }),
    );

    await expect(
      usersService.create({
        email: 'person@example.com',
        name: 'Person',
        passwordHash: 'already-hashed',
      }),
    ).rejects.toBeInstanceOf(ConflictException);
  });

  it('normalizes email when looking up an authentication account', async () => {
    prisma.user.findUnique.mockResolvedValue(null);

    await usersService.findForAuthentication(' Person@Example.com ');

    expect(prisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'person@example.com' },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        status: true,
      },
    });
  });

  it('maps updates for missing users to not found', async () => {
    prisma.user.update.mockRejectedValue(
      new Prisma.PrismaClientKnownRequestError('Record not found', {
        code: 'P2025',
        clientVersion: '7.0.0',
      }),
    );

    await expect(
      usersService.updateProfile('missing-id', { name: 'New Name' }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});
