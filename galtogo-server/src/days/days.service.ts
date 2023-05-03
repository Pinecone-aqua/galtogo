import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DisabledDay, IDisabledDay } from './days.schema';
import { Model } from 'mongoose';
import { createDisabledDayDto } from './dto/create-disabledDay.dto';

@Injectable()
export class DisabledDayService {
  constructor(
    @InjectModel(DisabledDay.name) private disabledDayModel: Model<DisabledDay>,
  ) {}

  async getDays(): Promise<IDisabledDay[]> {
    const result = await this.disabledDayModel.find({}).exec();
    return result;
  }

  async addDay(disabledDay: createDisabledDayDto): Promise<IDisabledDay> {
    console.log(disabledDay);
    const result = await this.disabledDayModel.create(disabledDay);
    return result;
  }

  async deleteDay(id: string) {
    await this.disabledDayModel.findByIdAndDelete(id).exec();
    const result = await this.disabledDayModel.find({}).exec();
    return result;
  }
}
