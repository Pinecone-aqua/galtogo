import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Table {
  @Prop({ required: true, max: 20 })
  name: number;

  @Prop({ required: true, max: 255 })
  capacity: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({
    required: true,
    type: {
      posX: { type: Number, default: 0 },
      posY: { type: Number, default: 0 },
    },
  })
  coords: {
    posX: number;
    posY: number;
  };
}

export const TableSchema = SchemaFactory.createForClass(Table);

export interface ITable {
  name: number;
  capacity: number;
  isActive: boolean;
  coords: {
    posX: number;
    posY: number;
  };
}
