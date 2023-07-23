import { Module } from '@nestjs/common';
import { OpenGraphicService } from './open-graphic.service';
import { OpenGraphicController } from './open-graphic.controller';

@Module({
  providers: [OpenGraphicService],
  controllers: [OpenGraphicController]
})
export class OpenGraphicModule {}
