import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller({
  path: 'companies/:companyId/projects',
  version: '1',
})
@UseGuards(JwtAuthGuard)
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
  ) {}

  @Post()
  createProject(
    @Param('companyId') companyId: string,
    @Body() dto: CreateProjectDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.projectsService.createProject(
      companyId,
      req.user.userId,
      dto,
    );
  }

  @Get()
  getCompanyProjects(
    @Param('companyId') companyId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.projectsService.getCompanyProjects(
      companyId,
      req.user.userId,
    );
  }

  @Get(':projectId')
  getProject(
    @Param('companyId') companyId: string,
    @Param('projectId') projectId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.projectsService.getProject(
      companyId,
      projectId,
      req.user.userId,
    );
  }

  @Patch(':projectId')
  updateProject(
    @Param('companyId') companyId: string,
    @Param('projectId') projectId: string,
    @Body() dto: UpdateProjectDto,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.projectsService.updateProject(
      companyId,
      projectId,
      req.user.userId,
      dto,
    );
  }

  @Delete(':projectId')
  deleteProject(
    @Param('companyId') companyId: string,
    @Param('projectId') projectId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    return this.projectsService.deleteProject(
      companyId,
      projectId,
      req.user.userId,
    );
  }
}