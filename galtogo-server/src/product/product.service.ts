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

    const findCategory: any = await this.categoryModel
      .find({
        name: createFood.category,
      })
      .select({ name: 1 });
    const createProduct = new this.productModel({
      title: createFood.title,
      desc: createFood.desc,
      img: createFood.img,
      category: findCategory.name,
    });
    return createProduct.save();
  }

  async findAll(): Promise<product[]> {
    return this.productModel.find().populate('category').exec();
  }
}
