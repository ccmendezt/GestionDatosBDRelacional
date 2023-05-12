import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EnterpriseService } from 'src/enterprise/enterprise.service';
import { Project } from './project.entity';
import { Repository } from 'typeorm';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
    private enterpriseService: EnterpriseService
  ) { }

  async createProject(project: CreateProjectDto) {
    const enterpriseFound = await this.enterpriseService.getEnterprise(project.enterprise_id).then((res) => {return res})
    if (enterpriseFound instanceof HttpException)
      return new HttpException('Enterprise not found', HttpStatus.NOT_FOUND)
    const newProject = this.projectRepository.create(project)
    return this.projectRepository.save(newProject)
  }

  getProjects() {
    return this.projectRepository.find({
      relations: ['enterprise']
    })
  }

  async getProject(id: number) {
    const projectFound = await this.projectRepository.findOne({
      where: {
        id: id
      },
      relations: ['enterprise']
    })
    if (!projectFound) {
      return new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }

    return projectFound
  }

  async deleteProject(id: number) {
    const result = await this.projectRepository.delete({ id: id })
    if (result.affected === 0) {
      return new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }
    return result
  }

  async updateProject(id: number, project: UpdateProjectDto) {
    const projectFound = await this.projectRepository.findOne({
      where: {
        id: id
      }
    })

    if (!projectFound) {
      return new HttpException('Project not found', HttpStatus.NOT_FOUND)
    }

    const projectUpdated = Object.assign(projectFound, project)
    return this.projectRepository.save(projectUpdated)
  }

}
