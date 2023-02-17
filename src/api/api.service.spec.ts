import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';

describe('ItemService', () => {
  let service: ApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService],
    }).compile();

    service = module.get<ApiService>(ApiService);
  });
  ApiService;

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
