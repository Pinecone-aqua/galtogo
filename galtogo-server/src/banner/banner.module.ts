import { Module } from '@nestjs/common';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { BannerController } from './banner.controller';
import bannerSchema, { banner } from './bannerSchema';
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
