import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { BannerService } from './banner.service';

@Controller('banner')
export class BannerController {
  constructor(
    private readonly bannerService: BannerService,
    private readonly cloudinary: CloudinaryService,
  ) {}
  @Post('add')
  @UseInterceptors(FileInterceptor('file'))
  async createBanner(@UploadedFile() files: any) {
    const uploading = await this.cloudinary.uploadImage(files);

    console.log(uploading);
    return this.bannerService.create(uploading.secure_url);
  }
  @Get()
  findAll() {
    return this.bannerService.findAll();
  }
}
