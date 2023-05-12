import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Enterprise } from "src/enterprise/enterprise.entity";
import { User } from "src/user/user.entity";
import { Project } from "src/project/project.entity";

@Entity({ name: 'userproject' })
export class UserProject {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number

  @Column({ nullable: true, type: 'smallint' })
  user_id: number

  @Column({ nullable: true, type: 'smallint' })
  project_id: number

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(() => Project, (project) => project.id)
  @JoinColumn({ name: 'project_id' })
  project: Project

}