import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type bannerDocument = HydratedDocument<banner>;

@Schema()
export class banner {
  @Prop()
  img: string;
}

const bannerSchema = SchemaFactory.createForClass(banner);

export default bannerSchema;
