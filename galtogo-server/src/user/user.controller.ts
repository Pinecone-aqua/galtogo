import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from './user.schema';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

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

  @Get('phone/:phone')
  getUserByPhone(@Param('phone') phone: string): Promise<IUser> {
    return this.userService.getUserByPhone(phone);
  }

  @Post('add')
  addUser(@Body() user: CreateUserDto): Promise<IUser> {
    return this.userService.addUser(user);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Get('auth/user')
  async verifyUser(
    @Query() query: { id: string },
    @Res() res: Response,
    // @Req() req: Request,
  ) {
    console.log('auth:', query.id);
    const id = query.id;
    if (!id) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    const user = await this.userService.getUserById(query.id);
    console.log('user: ', user);

    const payload = {
      firstName: user.firstName,
      role: user.role,
      phone: user.phone,
    };
    console.log('payload: ', payload);

    try {
      const token = this.jwtService.sign(payload);
      console.log('token: ', token);
      res.status(200).send({ path: 'http://localhost:3001/', token });

      // .redirect(`https://galtogo.vercel.app/account`);
    } catch (error) {
      console.log('token: ', error);
    }
  }
}
