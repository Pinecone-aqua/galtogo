import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('.well-known/pki-validation/999550D5A343324934EF6361B33DDB04.txt')
  getFile(@Res() res: Response) {
    res.sendFile(
      '/home/ubuntu/galtogo/galtogo-server/999550D5A343324934EF6361B33DDB04.txt',
    );
  }
}
