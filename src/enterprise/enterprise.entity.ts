import { Project } from 'src/project/project.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({name: 'enterprise'}) //localhost:3000/enterprise
export class Enterprise {
    @PrimaryGeneratedColumn({type: 'smallint'})
    id: number

    @Column({nullable: true, type: 'varchar', length: 50})
    name: string

    @Column({nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date

    @Column({nullable: true, type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date

    @OneToMany(() => Project, (project) => project.enterprise_id)
    projects: Project[]

    @OneToMany(() => User, (user) => user.enterprise_id)
    users: User[]
}