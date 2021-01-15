import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import * as dotenv from 'dotenv';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  // Logger.log(process.env.PORT)
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);

}

bootstrap();
