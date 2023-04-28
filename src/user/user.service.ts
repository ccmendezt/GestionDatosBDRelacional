import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EnterpriseService } from 'src/enterprise/enterprise.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private enterpriseService: EnterpriseService
  ) { }

  async createUser(user: CreateUserDto) {
    const enterpriseFound = await this.enterpriseService.getEnterprise(user.enterprise_id)
    if (!enterpriseFound) {
      return new HttpException('Enterprise not found', HttpStatus.NOT_FOUND)
    }
    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }

  getUsers() {
    return this.userRepository.find()
  }

  async getUser(id: number) {
    const userFound = await this.userRepository.findOne({
      where: {
        id: id
      }
    })
    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    return userFound
  }

  async deleteUser(id: number) {
    const result = await this.userRepository.delete({ id: id })
    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    return result
  }

  async updateUser(id: number, user: CreateUserDto) {
    const userFound = await this.userRepository.findOne({
      where: {
        id: id
      }
    })
    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND)
    }
    const userUpdated = Object.assign(userFound, user)
    return this.userRepository.save(userUpdated)
  }
}
