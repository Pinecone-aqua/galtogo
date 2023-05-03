import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly cloudinary: CloudinaryService,
  ) {}

  @Post('add')
  @UseInterceptors(FileInterceptor('file'))
  async createProduct(@UploadedFile() file: any, @Body() body: any) {
    const uploading = await this.cloudinary.uploadImage(file);
    console.log(uploading);
    const data = await {
      ...JSON.parse(body.newfood),
      img: uploading.secure_url,
    };
    return this.productService.create(data);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
}
