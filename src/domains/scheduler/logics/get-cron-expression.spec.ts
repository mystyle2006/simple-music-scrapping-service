import { getCronExpression } from './get-cron-expression';

describe('getCronExpression', () => {
  let output: string;
  beforeEach(() => {
    output = getCronExpression();
  });

  it('10분 마다 실행될 수 있도록 설정되어 있는지 체크', () => {
    expect(output).toBe('0 */10 * * * *');
  });
});
