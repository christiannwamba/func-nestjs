import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function createApp() {
  return await NestFactory.create(AppModule); 
}

async function bootstrap() {
  const app = await createApp();
  await app.listen(3000);
}
bootstrap();