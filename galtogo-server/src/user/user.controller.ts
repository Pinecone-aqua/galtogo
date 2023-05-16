import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): Promise<IUser[]> {
    return this.userService.getUser();
  }

  @Get(':phone')
  getUserByPhone(@Param('phone') phone: string): Promise<IUser> {
    return this.userService.getUserByPhone(Number(phone));
  }

  @Post('add')
  addUser(@Body() user: CreateUserDto): Promise<IUser> {
    return this.userService.addUser(user);
  }

  @Post('login')
  loginUser(@Body() phone: string) {
    console.log('controller: ', phone);
    return 'test';
    // return this.userService.loginUser(phoneNumber);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
