import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenGraphicModule } from '../open-graphic/open-graphic.module';

@Module({
  imports: [OpenGraphicModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
