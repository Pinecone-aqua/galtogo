import { Module } from '@nestjs/common';
import { DisabledDay, DisabledDaySchema } from './days.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DisabledDayController } from './days.controller';
import { DisabledDayService } from './days.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DisabledDay.name, schema: DisabledDaySchema },
    ]),
  ],
  controllers: [DisabledDayController],
  providers: [DisabledDayService],
})
export class DisabledDayModule {}
