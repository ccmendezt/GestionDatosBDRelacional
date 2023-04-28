import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProject } from './userproject.entity';
import { UserprojectController } from './userproject.controller';
import { UserprojectService } from './userproject.service';
import { ProjectModule } from 'src/project/project.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserProject]), ProjectModule, UserModule],
  controllers: [UserprojectController],
  providers: [UserprojectService]
})
export class UserprojectModule {}
