import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }
  ));
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Book API server running on PORT: ${process.env.PORT || 3000}`);
}
bootstrap();
