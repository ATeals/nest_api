import { Test, TestingModule } from '@nestjs/testing';
import { OpenGraphicService } from './open-graphic.service';

describe('OpenGraphicService', () => {
  let service: OpenGraphicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenGraphicService],
    }).compile();

    service = module.get<OpenGraphicService>(OpenGraphicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
