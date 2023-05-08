import { Body, Controller, Get, Post } from '@nestjs/common';

import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post('add')
  async createCategory(@Body() body: any) {
    console.log(body);
    return this.categoryService.create(body);
  }

  @Get()
  FindAll() {
    return this.categoryService.findAll();
  }
}
