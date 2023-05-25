import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('.well-known/pki-validation/ADE0E329509882C00FFAB792DD94B9B9.txt')
  getFile(@Res() res: Response) {
    res.sendFile(join(process.cwd(), 'ADE0E329509882C00FFAB792DD94B9B9.txt'));
  }
}
