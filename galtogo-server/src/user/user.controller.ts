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
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get()
  getUser(): Promise<IUser[]> {
    return this.userService.getUser();
  }

  // @Post('add')
  // addUser(@Body() user: CreateUserDto): Promise<IUser> {
  //   return this.userService.addUser(user);
  // }
  @Post('add')
  addUser(@Body() createUserInput: IUser) {
    try {
      return this.userService.addUser(createUserInput);
    } catch (error) {
      return error.message;
    }
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
