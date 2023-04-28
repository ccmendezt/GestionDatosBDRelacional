import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './project.entity';
import { EnterpriseModule } from 'src/enterprise/enterprise.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project]), EnterpriseModule],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports: [ProjectService]
})

export class ProjectModule { }
