import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Table {
  @Prop({ required: true, max: 20 })
  name: string;
  @Prop({ required: true })
  capacity: number;
}

export const TableSchema = SchemaFactory.createForClass(Table);
