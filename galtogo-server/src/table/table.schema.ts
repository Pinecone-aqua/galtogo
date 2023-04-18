import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Table {
  @Prop({ required: true, max: 20 })
  name: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);
