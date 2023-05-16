import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from '../cloudinaryconf/cloudinary.service';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('file'))
  async createProduct(@UploadedFile() files: any, @Body() body: any) {
    const uploading = await this.cloudinary.uploadImage(files);
    const data = await {
      ...JSON.parse(body.foodlist),
      img: uploading.secure_url,
    };
    return this.productService.create(data);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
