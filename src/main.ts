import { NestFactory } from '@nestjs/core';
import { AppModule } from './Module/App/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000/', 'https://ateals.github.io/'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(8080, () => {
    console.log('✅ server run ' + 'http://localhost:8080/ ');
  });
}
bootstrap();
