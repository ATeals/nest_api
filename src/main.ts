import { NestFactory } from '@nestjs/core';
import { AppModule } from './Module/App/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080, () => {
    console.log('✅ server run ' + 'http://localhost:8080/ ');
  });
}
bootstrap();
