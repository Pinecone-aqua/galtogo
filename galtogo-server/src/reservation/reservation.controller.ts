import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { IReservation } from './reservation.schema';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}
  @Get()
  getReservation(): Promise<IReservation[]> {
    return this.reservationService.getReservations();
  }

  @Post('add')
  addReservation(
    @Body() reservation: CreateReservationDto,
  ): Promise<IReservation> {
    return this.reservationService.addReservation(reservation);
  }

  @Patch(':id')
  updateReservation(
    @Param('id') id: string,
    @Body() reservation: UpdateReservationDto,
  ) {
    return this.reservationService.updateReservation(id, reservation);
  }

  @Delete(':id')
  deleteReservation(@Param('id') id: string) {
    return this.reservationService.deleteReservation(id);
  }
}
