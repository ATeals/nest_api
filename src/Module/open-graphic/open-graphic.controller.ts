import { Controller, Get, Param, Query, Search } from '@nestjs/common';
import { OpenGraphicService } from './open-graphic.service';

@Controller('open-graphic')
export class OpenGraphicController {
  constructor(private readonly openGraphicService: OpenGraphicService) {}

  @Get('/')
  getOg(@Query('url') url: string) {
    return this.openGraphicService.getOg(url);
  }
}
