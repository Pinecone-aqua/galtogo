import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import createCategoryDto from './categoryDto/createCategory.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Post('add')
  createCategory(@Body() body: createCategoryDto) {
    return this.categoryService.create(body);
  }

  @Get()
  FindAll() {
    return this.categoryService.findAll();
  }
}
