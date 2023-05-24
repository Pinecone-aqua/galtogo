import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TableService } from './table.service';
import { TableController } from './table.controller';
import { Table, TableSchema } from './table.schema';
import { ReservationService } from 'src/reservation/reservation.service';
import { Reservation } from 'src/reservation/reservation.schema';
import { ReservationSchema } from 'src/reservation/reservation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Table.name, schema: TableSchema }]),
    MongooseModule.forFeature([
      { name: Reservation.name, schema: ReservationSchema },
    ]),
  ],
  controllers: [TableController],
  providers: [TableService, ReservationService],
})
export class TableModule {}
