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
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly cloudinary: CloudinaryService,
  ) {}
  @Post('add')
  @UseInterceptors(FileInterceptor('file'))
  async createCategory(@UploadedFile() files: any, @Body() body: any) {
    const uploading = await this.cloudinary.uploadImage(files);
    console.log(body);
    const data = await {
      ...JSON.parse(body.categorylist),
      img: uploading.secure_url,
    };
    return this.categoryService.create(data);
  }

  @Get()
  FindAll() {
    return this.categoryService.findAll();
  }
}
