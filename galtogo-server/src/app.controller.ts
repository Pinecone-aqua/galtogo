import { Controller, Get, StreamableFile } from '@nestjs/common';
import { AppService } from './app.service';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('.well-known/pki-validation')
  getFile(): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), '999550D5A343324934EF6361B33DDB04.txt'),
    );
    return new StreamableFile(file);
  }
}
