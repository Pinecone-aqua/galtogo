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

  async getUserById(id: string): Promise<IUser> {
    return await this.userModel.findOne({ _id: id });
  }

  async getUserByPhone(phone: string): Promise<IUser> {
    let currentUser = {
      lastName: '',
      firstName: '',
      email: '',
      phone: Number(phone),
      role: 'GUEST',
    };
    const result = await this.userModel.findOne({ phone }).exec();
    if (result) {
      currentUser = result;
    } else {
      currentUser = await this.userModel.create({ phone });
    }
    return currentUser;
  }

  async addUser(user: CreateUserDto): Promise<User> {
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
