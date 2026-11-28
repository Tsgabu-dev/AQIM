import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  private async ensureActiveMember(
    companyId: string,
    userId: string,
  ): Promise<void> {
    const membership = await this.prisma.membership.findUnique({
      where: {
        userId_companyId: {
          userId,
          companyId,
        },
      },
    });

    if (!membership || membership.status !== 'ACTIVE') {
      throw new ForbiddenException(
        'You are not an active member of this company.',
      );
    }
  }

  private validateDates(
    startDate?: string,
    endDate?: string,
  ): void {
    if (startDate && endDate) {
      if (new Date(endDate) < new Date(startDate)) {
        throw new BadRequestException(
          'End date cannot be earlier than start date.',
        );
      }
    }
  }

  async createProject(
    companyId: string,
    userId: string,
    dto: CreateProjectDto,
  ) {
    await this.ensureActiveMember(companyId, userId);

    this.validateDates(dto.startDate, dto.endDate);

    const existingProject = await this.prisma.project.findUnique({
      where: {
        companyId_name: {
          companyId,
          name: dto.name.trim(),
        },
      },
    });

    if (existingProject) {
      throw new ConflictException(
        'A project with this name already exists in this company.',
      );
    }

    return this.prisma.project.create({
      data: {
        companyId,
        createdById: userId,
        name: dto.name.trim(),
        description: dto.description,
        location: dto.location,
        budget: dto.budget,
        startDate: dto.startDate
          ? new Date(dto.startDate)
          : undefined,
        endDate: dto.endDate
          ? new Date(dto.endDate)
          : undefined,
        status: dto.status as
          | 'PLANNING'
          | 'ACTIVE'
          | 'ON_HOLD'
          | 'COMPLETED'
          | 'CANCELLED'
          | undefined,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async getCompanyProjects(
    companyId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    return this.prisma.project.findMany({
      where: { companyId },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getProject(
    companyId: string,
    projectId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const project = await this.prisma.project.findFirst({
      where: {
        id: projectId,
        companyId,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!project) {
      throw new NotFoundException('Project not found.');
    }

    return project;
  }

  async updateProject(
    companyId: string,
    projectId: string,
    userId: string,
    dto: UpdateProjectDto,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const project = await this.prisma.project.findFirst({
      where: {
        id: projectId,
        companyId,
      },
    });

    if (!project) {
      throw new NotFoundException('Project not found.');
    }

    const startDate = dto.startDate
      ? new Date(dto.startDate)
      : project.startDate;

    const endDate = dto.endDate
      ? new Date(dto.endDate)
      : project.endDate;

    if (startDate && endDate && endDate < startDate) {
      throw new BadRequestException(
        'End date cannot be earlier than start date.',
      );
    }

    if (dto.name && dto.name.trim() !== project.name) {
      const existingProject =
        await this.prisma.project.findUnique({
          where: {
            companyId_name: {
              companyId,
              name: dto.name.trim(),
            },
          },
        });

      if (existingProject) {
        throw new ConflictException(
          'A project with this name already exists in this company.',
        );
      }
    }

    return this.prisma.project.update({
      where: { id: projectId },
      data: {
        name: dto.name?.trim(),
        description: dto.description,
        location: dto.location,
        budget: dto.budget,
        startDate: dto.startDate
          ? new Date(dto.startDate)
          : undefined,
        endDate: dto.endDate
          ? new Date(dto.endDate)
          : undefined,
        status: dto.status as
          | 'PLANNING'
          | 'ACTIVE'
          | 'ON_HOLD'
          | 'COMPLETED'
          | 'CANCELLED'
          | undefined,
      },
    });
  }

  async deleteProject(
    companyId: string,
    projectId: string,
    userId: string,
  ) {
    await this.ensureActiveMember(companyId, userId);

    const project = await this.prisma.project.findFirst({
      where: {
        id: projectId,
        companyId,
      },
    });

    if (!project) {
      throw new NotFoundException('Project not found.');
    }

    await this.prisma.project.delete({
      where: { id: projectId },
    });

    return {
      message: 'Project deleted successfully.',
      projectId,
    };
  }
}