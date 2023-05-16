import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  ADMIN = 'ADMIN',
  GUEST = 'GUEST',
  CLIENT = 'CLIENT',
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: false, default: '' })
  firstName: string;

  @Prop({ required: false, default: '' })
  lastName: string;

  @Prop({ required: false, default: '' })
  userEmail: string;

  @Prop({ required: true, unique: true, max: 99999999 })
  phone: number;

  @Prop({ enum: Object.values(UserRole), default: UserRole.GUEST })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser {
  lastName: string;
  firstName: string;
  userEmail: string;
  phone: number;
  role: string;
}
