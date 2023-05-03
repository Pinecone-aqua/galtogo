import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DisabledDayService } from './days.service';
import { IDisabledDay } from './days.schema';
import { createDisabledDayDto } from './dto/create-disabledDay.dto';

@Controller('days')
export class DisabledDayController {
  constructor(private readonly disabledDayService: DisabledDayService) {}

  @Get()
  getAllDisabledDays(): Promise<IDisabledDay[]> {
    return this.disabledDayService.getDays();
  }

  @Post()
  addDisabledDay(
    @Body() disabledDay: createDisabledDayDto,
  ): Promise<IDisabledDay> {
    return this.disabledDayService.addDay(disabledDay);
  }

  @Delete(':id')
  deleteDisabledDay(@Param('id') id: string) {
    console.log(id);
    return this.disabledDayService.deleteDay(id);
  }
}
