import { Injectable } from '@nestjs/common';

const ogs = require('open-graph-scraper');

@Injectable()
export class OpenGraphicService {
  async getOg(url: string) {
    try {
      const { result } = await ogs({ url });
      return result;
    } catch (error) {
      return error;
    }
  }
}
