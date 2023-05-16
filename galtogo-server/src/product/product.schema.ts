import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { category } from '../category/category.schema';

export type productDocument = HydratedDocument<product>;

@Schema()
export class product {
  @Prop()
  title: string;
  @Prop()
  desc: string;
  @Prop()
  price: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'category' })
  category: category;
  @Prop()
  img: string;
}

export const productScehama = SchemaFactory.createForClass(product);
