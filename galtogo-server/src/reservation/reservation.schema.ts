import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Table } from 'src/table/table.schema';
import { User } from 'src/user/user.schema';

@Schema()
export class Reservation {
  @Prop({ required: true })
  time: string; // '16:00'

  @Prop({ required: true })
  date: string; // '2023-04-15'

  @Prop({ required: true })
  persons: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true,
  })
  table: Table;

  @Prop({ default: () => Date.now() })
  createdAt: Date;

  @Prop({ default: () => Date.now() })
  updatedAt: Date;
}
export const ReservationSchema = SchemaFactory.createForClass(Reservation);
