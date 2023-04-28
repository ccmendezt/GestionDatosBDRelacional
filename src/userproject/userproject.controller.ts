import { Controller, Post, Get, Body, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { UserprojectService } from './userproject.service';
import { CreateUserProjectDto } from './dto/create-userproject.dto';

@Controller('userproject')
export class UserprojectController {
    constructor(private userProjectService: UserprojectService){}

    @Post()
    createUserProject(@Body() userProject: CreateUserProjectDto){
        return this.userProjectService.createUserProject(userProject)
    }

    @Get()
    getUserProjects(){
        return this.userProjectService.getUserProjects()
    }

    @Get(':id')
    getUserProject(@Param('id', ParseIntPipe) id: number){
        return this.userProjectService.getUserProject(id)
    }

    @Delete(':id')
    deleteUserProject(@Param('id', ParseIntPipe) id: number){
        return this.userProjectService.deleteUserProject(id)
    }

    @Patch(':id')
    updateUserProject(@Param('id', ParseIntPipe) id: number, @Body() userProject: CreateUserProjectDto){
        return this.userProjectService.updateUserProject(id, userProject)
    }
}
