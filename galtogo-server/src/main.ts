import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, () =>
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`),
  );
}
bootstrap();
