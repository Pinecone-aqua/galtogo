import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { banner } from './bannerSchema';
import createBannerDto from './bannerDto/createBanner.dto';

@Injectable()
export class BannerService {
  constructor(@InjectModel(banner.name) private bannerModel: Model<banner>) {}

  async create(createBanner: createBannerDto): Promise<any> {
    const result = await this.bannerModel.create({ imageURL: createBanner });
    return result;
  }

  async findAll(): Promise<banner[]> {
    return this.bannerModel.find().exec();
  }
}
