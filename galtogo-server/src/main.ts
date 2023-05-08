import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 5050;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, () =>
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`),
  );
}
bootstrap();
