import { Test, TestingModule } from '@nestjs/testing';

import { VendorEnum } from '../../enum/vendor.enum';
import { albumIdStub } from '../scheduler/_test/stubs/album-id.stub';
import { MusicChartController } from './music-chart.controller';
import { MusicChartService } from './music-chart.service';

jest.mock('./music-chart.service.ts');

describe('music-chart.controller.spec.ts', () => {
  let controller: MusicChartController;
  let service: MusicChartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicChartController],
      providers: [MusicChartService],
    }).compile();

    controller = module.get<MusicChartController>(MusicChartController);
    service = module.get<MusicChartService>(MusicChartService);
  });

  describe('findMusics ', () => {
    beforeEach(async () => {
      await controller.findMusics(VendorEnum.MELON);
    });

    it('벤더 체크', () => {
      expect(service.findMusics).toHaveBeenCalledWith('MELON');
    });
  });

  describe('findOne', () => {
    beforeEach(async () => {
      await controller.findOne(VendorEnum.MELON, albumIdStub);
    });

    it('벤더 체크', () => {
      expect(service.findOne).toHaveBeenCalledWith({
        vendor: 'MELON',
        musicId: '050505',
      });
    });
  });

  describe('find', () => {
    beforeEach(async () => {
      await controller.find(VendorEnum.MELON);
    });

    it('벤더 체크', () => {
      expect(service.find).toHaveBeenCalledWith('MELON');
    });
  });
});
