import { Controller, Post, Get, Body, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController {

    constructor(private projectService: ProjectService) { }

    @Post()
    createProject(@Body() project: CreateProjectDto) {
        return this.projectService.createProject(project)
    }

    @Get()
    getProjects() {
        return this.projectService.getProjects()
    }

    @Get(':id')
    getProject(@Param('id', ParseIntPipe) id: number) {
        return this.projectService.getProject(id)
    }

    @Delete(':id')
    deleteEnterprise(@Param('id', ParseIntPipe) id: number) {
        return this.projectService.deleteProject(id)
    }

    @Patch(':id')
    updateEnterprise(@Param('id', ParseIntPipe) id: number, @Body() project: UpdateProjectDto) {
        return this.projectService.updateProject(id, project)
    }
}
