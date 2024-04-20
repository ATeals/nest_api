import { NestFactory } from '@nestjs/core';
import { AppModule } from './Module/App/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000, () => {
    console.log('✅ server run ' + 'http://localhost:3000/ ');
  });
}
bootstrap();
