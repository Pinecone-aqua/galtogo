import { Body, Controller, Get, Post } from '@nestjs/common';
import { addTableDto } from './table-add.dto';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}
  @Get()
  getAll() {
    return this.tableService.getTables();
  }

  @Post('add')
  addTable(@Body() table: addTableDto) {
    return this.tableService.addTable(table);
  }
}
