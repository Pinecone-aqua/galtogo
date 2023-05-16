import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { TableService } from './table.service';
import { UpdateTableDto } from './dto/update-table.dto';
import { ITable } from './table.schema';

@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}
  @Get()
  getAll(): Promise<ITable[]> {
    return this.tableService.getTables();
  }

  @Post('add')
  addTable(@Body() table: CreateTableDto): Promise<ITable> {
    console.log('table', table);
    return this.tableService.addTable(table);
  }

  @Patch(':id')
  updateTable(@Param('id') id: string, @Body() table: UpdateTableDto) {
    return this.tableService.updateTable(id, table);
  }

  @Delete(':id')
  deleteTable(@Param('id') id: string) {
    return this.tableService.deleteTable(id);
  }

  @Patch(':id/coords')
  positionTable(
    @Param('id') id: string,
    @Query('posX') posX: number,
    @Query('posY') posY: number,
  ) {
    console.log('id:', id, ', posX: ', posX, ', posY: ', posY);
    return this.tableService.positionTable(id, posX, posY);
  }
}
