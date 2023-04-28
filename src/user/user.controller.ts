import { Controller, Post, Get, Body, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

  constructor(private userService: UserService) { }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user)
  }

  @Get()
  getUsers() {
    return this.userService.getUsers()
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUser(id)
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id)
  }

  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: CreateUserDto) {
    return this.userService.updateUser(id, user)
  }
  
}
