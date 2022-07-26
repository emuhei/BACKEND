import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/user/models/user.model';
import { UserService } from './user.service';

type userBody = { firstName: string, lastName: string, userName: string, isActive: boolean }
// url/user/users
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  users: any[] = [];

  @Get('users')
  getUsers() {
    return this.userService.getUsers()
  }

  @Post('create')
  createUser(@Body() body: userBody) {
    this.userService.createUser(body)
    return { message: "You have signed up.", body }
  }
  @Post('findone')
  findOne(@Body('id') id:string)  {
    return this.userService.findOne(id)
  }
  @Post('login')
  login(@Body() body: userBody) {
    return this.userService.login(body)
  }
  @Post('oldest')
  findOldest(@Body() body: userBody) {
    return this.userService.findOldest(body)
  }
}