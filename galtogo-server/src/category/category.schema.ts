import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class category {
  @Prop()
  category: string;
}

const categorySchema = SchemaFactory.createForClass(category);

export default categorySchema;
