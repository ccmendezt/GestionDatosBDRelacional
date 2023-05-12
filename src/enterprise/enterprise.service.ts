import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enterprise } from './enterprise.entity';
import { Repository } from 'typeorm';
import { CreateEnterpriseDto } from './dto/create-enterprise.dto';
import { UpdateEnterpriseDto } from './dto/update-enterprise.dto';

@Injectable()
export class EnterpriseService {
  
  constructor(@InjectRepository(Enterprise) private enterpriseRepository: Repository<Enterprise>) { }

  createEnterprise(enterprise: CreateEnterpriseDto) {
    const newEnterprise = this.enterpriseRepository.create(enterprise)
    return this.enterpriseRepository.save(newEnterprise)
  }

  async getEnterprises() {
    return await this.enterpriseRepository.find({
      relations: ['projects'],
    })
  }

  async getEnterprise(id: number) {
    const enterpriseFound = await this.enterpriseRepository.findOne({
      where: {
        id: id
      },
      relations: ['projects'],
    })
    if (!enterpriseFound) {
      return new HttpException('Enterprise no encontrada', HttpStatus.NOT_FOUND)
    }
    return enterpriseFound
  }

  async deleteEnterprise(id: number) {
    const result = await this.enterpriseRepository.delete({id: id})
    if (result.affected === 0) {
      return new HttpException('Enterprise no encontrada', HttpStatus.NOT_FOUND)
    }
    return result
  }

  async updateEnterprise(id: number, enterprise: UpdateEnterpriseDto) {
    const enterpriseFound = await this.enterpriseRepository.findOne({
      where: {
        id: id
      }
    })

    if(!enterpriseFound) {
      return new HttpException('Enterprise no encontrada', HttpStatus.NOT_FOUND)
    }

    const enterpriseUpdated = Object.assign(enterpriseFound, enterprise)
    return this.enterpriseRepository.save(enterpriseUpdated)
  }
}
