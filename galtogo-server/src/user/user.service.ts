import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser, User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getUser(): Promise<IUser[]> {
    const result = await this.userModel.find().exec();
    return result;
  }

  async getUserByPhone(phone: number): Promise<IUser> {
    const result = await this.userModel.findOne({ phone }).exec();
    return result;
  }

  async addUser(user: CreateUserDto): Promise<IUser> {
    const result = await this.userModel.create(user);
    return result;
  }

  async updateUser(id: string, user: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, user).exec();
    return { message: `User updated with id: ${id}` };
  }

  async deleteUser(id: string) {
    await this.userModel.findByIdAndDelete(id).exec();
    return { message: `User deleted with id: ${id}` };
  }
}
