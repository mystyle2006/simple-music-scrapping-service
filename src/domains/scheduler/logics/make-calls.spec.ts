import { ScrapStatusEnum } from '../../../enums/scrap-status.enum';
import { VendorEnum } from '../../../enums/vendor.enum';
import { CallsDto } from '../dto/return-svc-scrap-log.dto';
import { ScrapLogInterface } from '../interfaces/scrap-log.interface';
import { makeCalls } from './make-calls';

describe('make-calls.spec.ts', () => {
  let output: CallsDto;
  beforeEach(() => {
    const vendorNames = [VendorEnum.MELON];
    const logs: ScrapLogInterface[] = [
      {
        id: 'log-1-id',
        vendorName: VendorEnum.MELON,
        status: ScrapStatusEnum.DONE,
        startedAt: new Date(),
        finishedAt: new Date(),
      },
    ];

    output = makeCalls(vendorNames, logs);
  });

  it('로그 수 체크', () => {
    expect(output).toEqual({
      total: 1,
      melon: 1,
    });
  });
});
