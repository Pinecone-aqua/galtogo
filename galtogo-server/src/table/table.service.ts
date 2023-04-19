import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Table } from './table.schema';
import { Model } from 'mongoose';
import { addTableDto } from './table-add.dto';

@Injectable()
export class TableService {
  constructor(@InjectModel(Table.name) private tableModel: Model<Table>) {}

  getTables() {
    return this.tableModel.find().exec();
  }

  addTable(table: addTableDto) {
    this.tableModel.create(table);
    return { message: 'Table created!', table };
  }
}
