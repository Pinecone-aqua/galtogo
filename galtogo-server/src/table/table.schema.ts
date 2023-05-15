import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum TableSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export enum TableShape {
  ROUND = 'round',
  SQUARE = 'square',
  RECTANGLE = 'rectangle',
}
@Schema({ timestamps: true })
export class Table {
  @Prop({ required: true, max: 20 })
  name: number;

  @Prop({ required: true, max: 255 })
  capacity: number;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ enum: Object.values(TableShape), default: TableShape.ROUND })
  shape: string;

  @Prop({ enum: Object.values(TableSize), default: TableSize.MEDIUM })
  size: string;

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
