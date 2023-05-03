import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class DisabledDay {
  @Prop({ required: true })
  year: number; // '2023'
  @Prop({ required: true })
  month: number; // '5'
  @Prop({ required: true })
  day: number; // '25'
  @Prop({ required: true })
  description: string; // 'Dotood ajiltai'
}
export const DisabledDaySchema = SchemaFactory.createForClass(DisabledDay);

export interface IDisabledDay {
  year: number;
  month: number;
  day: number;
  description: string;
}
