import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CheckRole } from 'src/user/role/role.decorator';
import { CheckRoleGuard } from 'src/user/role/role.guard';

@Controller('order')
export class OrderController {
  @Post('add')
  @UseGuards(CheckRoleGuard)
  @CheckRole('ADMIN')
  putOrder(@Body() token: string) {
    console.log(token);
    return 'Order added';
  }
}
