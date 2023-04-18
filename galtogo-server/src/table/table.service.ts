import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Table } from './table.schema';
import { Model } from 'mongoose';

@Injectable()
export class TableService {
  constructor(@InjectModel(Table.name) private tableModel: Model<Table>) {}
  getTables(): object {
    return this.tableModel.find().exec();
  }
}
