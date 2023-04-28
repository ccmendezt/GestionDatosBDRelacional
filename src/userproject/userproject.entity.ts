import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Enterprise } from "src/enterprise/enterprise.entity";

@Entity({ name: 'userproject' })
export class UserProject {
  @PrimaryGeneratedColumn({ type: 'smallint' })
  id: number

  @Column({ nullable: true, type: 'smallint' })
  user_id: number

  @Column({ nullable: true, type: 'smallint' })
  project_id: number

}