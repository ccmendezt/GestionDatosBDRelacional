export class CreateUserDto {
    username?: string
    password?: string
    professional_headline?: string
    created_at?: Date
    updated_at?: Date
    project_id?: number
    enterprise_id: number
}