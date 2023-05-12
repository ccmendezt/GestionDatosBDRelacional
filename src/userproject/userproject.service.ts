import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { ProjectService } from 'src/project/project.service';
import { UserProject } from './userproject.entity';
import { Repository } from 'typeorm';
import { CreateUserProjectDto } from './dto/create-userproject.dto';

@Injectable()
export class UserprojectService {
    
    constructor(
        @InjectRepository(UserProject) private userProjectRepository: Repository<UserProject>,
        private projectService: ProjectService,
        private userService: UserService
    ){}

    async createUserProject(userProject: CreateUserProjectDto){
        const projectFound = await this.projectService.getProject(userProject.project_id).then((res) => {return res})
        const userFound = await this.userService.getUser(userProject.user_id).then((res) => {return res})

        if(projectFound instanceof HttpException || userFound instanceof HttpException)
            return new HttpException('Project or User not found', HttpStatus.NOT_FOUND)
        const newUserProject = this.userProjectRepository.create(userProject)
        return this.userProjectRepository.save(newUserProject)
    }

    getUserProjects(){
        return this.userProjectRepository.find({
            relations: ['project', 'user']
        })
    }

    async getUserProject(id: number){
        const userProjectFound = await this.userProjectRepository.findOne({
            where: {
                id: id
            },
            relations: ['project', 'user']
        })
        if(!userProjectFound){
            return new HttpException('UserProject not found', HttpStatus.NOT_FOUND)
        }

        return userProjectFound
    }

    async deleteUserProject(id: number){
        const result = await this.userProjectRepository.delete({id: id})
        if(result.affected === 0){
            return new HttpException('UserProject not found', HttpStatus.NOT_FOUND)
        }
        return result
    }

    async updateUserProject(id: number, userProject: CreateUserProjectDto){
        const userProjectFound = await this.userProjectRepository.findOne({
            where: {
                id: id
            }
        })
        if(!userProjectFound){
            return new HttpException('UserProject not found', HttpStatus.NOT_FOUND)
        }

        const userProjectUpdated = Object.assign(userProjectFound, userProject)
        return this.userProjectRepository.save(userProjectUpdated)
    }

}
