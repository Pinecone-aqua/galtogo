import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Reservation } from 'src/reservation/reservation.schema';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, max: 20 })
  firstName: string;
  @Prop({ required: true, max: 20 })
  lastName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, unique: true, max: 99999999 })
  phone: number;
}

export const UserSchema = SchemaFactory.createForClass(User);

export interface IUser {
  lastName: string;
  firstName: string;
  email: string;
  phone: number;
}
