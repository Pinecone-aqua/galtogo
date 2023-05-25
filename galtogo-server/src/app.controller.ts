import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('.well-known/pki-validation/999550D5A343324934EF6361B33DDB04.txt')
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), '999550D5A343324934EF6361B33DDB04.txt'),
    );
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition':
        'attachment; filename="999550D5A343324934EF6361B33DDB04.txt"',
    });
    return new StreamableFile(file);
  }
}
