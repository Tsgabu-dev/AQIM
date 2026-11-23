import { Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../../database/prisma.service';
declare const profileSelect: {
    id: true;
    email: true;
    name: true;
    preferredLanguage: true;
    status: true;
    createdAt: true;
    updatedAt: true;
};
declare const authenticationSelect: {
    id: true;
    email: true;
    passwordHash: true;
    status: true;
};
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
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(input: CreateUserInput): Promise<UserProfile>;
    findProfileById(id: string): Promise<UserProfile | null>;
    findForAuthentication(email: string): Promise<AuthenticationUser | null>;
    updateProfile(id: string, input: UpdateUserProfileInput): Promise<UserProfile>;
}
export {};
