import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { category } from './category.Schema';
import createCategoryDto from './categoryDto/createCategory.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(category.name) private categoryModel: Model<category>,
  ) {}

  async create(createCategory: createCategoryDto): Promise<any> {
    const result = await this.categoryModel.create(createCategory);
    return result;
  }

  async findAll(): Promise<category[]> {
    return this.categoryModel.find().exec();
  }
}
