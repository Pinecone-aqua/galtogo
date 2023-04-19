import { ObjectId } from 'mongoose';

export class CreateReservationDto {
  readonly time: string;
  readonly date: string;
  readonly persons: number;
  readonly isActive: boolean;
  readonly user: ObjectId;
  readonly table: ObjectId;
}
