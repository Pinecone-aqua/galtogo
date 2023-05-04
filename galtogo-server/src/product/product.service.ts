import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { category } from 'src/category/category.Schema';
import CreateProductDto from './productDto/create.product.dto';
import { product } from './productSchema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(product.name) private productModel: Model<product>,
    @InjectModel(category.name) private categoryModel: Model<category>,
  ) {}

  async create(createFood: CreateProductDto): Promise<any> {
    console.log('create:', createFood);
    const result = await this.productModel.create(createFood);

    return result.save();
  }

  async findAll(): Promise<product[]> {
    return this.productModel.find().populate('category').exec();
  }
}
