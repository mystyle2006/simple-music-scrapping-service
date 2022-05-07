import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

import { queueDictionary } from '../../../dictionary/queue.dictionary';

@Processor(queueDictionary.MUSIC_SCRAPPING)
export class ScrappingConsumer {
  @Process()
  async scrapping(job: Job<unknown>) {
    console.log(job.data);
  }
}
