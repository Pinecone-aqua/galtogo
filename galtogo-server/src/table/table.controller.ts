import { Controller, Get } from '@nestjs/common';
import { TableService } from './table.service';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}
  @Get()
  getAll(): object {
    return this.tableService.getTables();
  }
}
