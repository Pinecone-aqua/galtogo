import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type categoryDocument = HydratedDocument<category>;

@Schema()
export class category {
  @Prop()
  name: string;
}

const categorySchema = SchemaFactory.createForClass(category);

export default categorySchema;
