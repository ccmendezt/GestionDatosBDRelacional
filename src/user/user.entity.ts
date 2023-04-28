import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Enterprise } from "src/enterprise/enterprise.entity";
import { UserProject } from "src/userproject/userproject.entity";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number

  @Column({ nullable: true, type: 'varchar', length: 50 })
  username: string

  @Column({ nullable: true, type: 'varchar', length: 200 })
  password: string

  @Column({ nullable: true, type: 'varchar', length: 50 })
  professional_headline: string

  @Column({ nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @Column({ nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date

  @Column({ nullable: true, type: 'smallint' })
  project_id: number

  @Column({ nullable: true, type: 'smallint' })
  enterprise_id: number

  @OneToMany(() => UserProject, userProject => userProject.user_id)
  userProjects: UserProject[]

}