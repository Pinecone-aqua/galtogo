import { Controller, Get } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('/reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}
  @Get()
  getReservation() {
    return this.reservationService.getReservations();
  }
}
