import { Test, TestingModule } from '@nestjs/testing';
import { OpenGraphicController } from './open-graphic.controller';

describe('OpenGraphicController', () => {
  let controller: OpenGraphicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenGraphicController],
    }).compile();

    controller = module.get<OpenGraphicController>(OpenGraphicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
