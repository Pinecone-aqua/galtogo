import { Module } from '@nestjs/common';
import { CloudinaryModule } from '../cloudinaryconf/cloudinary.module';
import { BannerController } from './banner.controller';
import bannerSchema, { banner } from './banner.schema';
import { BannerService } from './banner.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CloudinaryModule,
    MongooseModule.forFeature([{ name: banner.name, schema: bannerSchema }]),
  ],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule {}
