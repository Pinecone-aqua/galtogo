import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { category } from 'src/category/category.Schema';

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
}

export const productScehama = SchemaFactory.createForClass(product);
