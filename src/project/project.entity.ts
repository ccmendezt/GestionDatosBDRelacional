import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Enterprise } from "src/enterprise/enterprise.entity";
import { UserProject } from "src/userproject/userproject.entity";

@Entity({name: 'project'})
export class Project{
    @PrimaryGeneratedColumn({type: 'smallint'})
    id: number

    @Column({nullable: true, type: 'text'})
    description: string

    @Column({nullable: true, type: 'varchar', length: 50})
    name: string

    @Column({nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP'})
    start_date: Date

    @Column({nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP'})
    end_date: Date

    @Column({nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date

    @Column({nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date

    @Column({nullable: true, type: 'varchar', length: 50})
    state: string

    @Column({type: 'smallint'})
    enterprise_id: number

    @ManyToOne(() => Enterprise, (enterprise) => enterprise.projects)
    @JoinColumn({name: 'enterprise_id'})
    enterprise: Enterprise

    @OneToMany(() => UserProject, (userProject) => userProject.project_id)
    userProjects: UserProject[]
    
}