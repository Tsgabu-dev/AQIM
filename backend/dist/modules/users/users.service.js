"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const prisma_service_1 = require("../../database/prisma.service");
const profileSelect = {
    id: true,
    email: true,
    name: true,
    preferredLanguage: true,
    status: true,
    createdAt: true,
    updatedAt: true,
};
const authenticationSelect = {
    id: true,
    email: true,
    passwordHash: true,
    status: true,
};
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(input) {
        const email = input.email.trim().toLowerCase();
        const name = input.name.trim();
        if (!email || !name || !input.passwordHash.trim()) {
            throw new common_1.BadRequestException('Email, name, and a password hash are required');
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
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new common_1.ConflictException('A user with this email already exists');
            }
            throw error;
        }
    }
    async findProfileById(id) {
        return this.prisma.user.findUnique({
            where: { id },
            select: profileSelect,
        });
    }
    async findForAuthentication(email) {
        return this.prisma.user.findUnique({
            where: { email: email.trim().toLowerCase() },
            select: authenticationSelect,
        });
    }
    async updateProfile(id, input) {
        const data = {};
        if (input.name !== undefined) {
            const name = input.name.trim();
            if (!name) {
                throw new common_1.BadRequestException('Name cannot be empty');
            }
            data.name = name;
        }
        if (input.preferredLanguage !== undefined) {
            data.preferredLanguage = input.preferredLanguage;
        }
        if (Object.keys(data).length === 0) {
            throw new common_1.BadRequestException('At least one profile field is required');
        }
        try {
            return await this.prisma.user.update({
                where: { id },
                data,
                select: profileSelect,
            });
        }
        catch (error) {
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2025') {
                throw new common_1.NotFoundException('User not found');
            }
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map