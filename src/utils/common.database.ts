import { InternalServerErrorException } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

import { errorMessageDictionary } from '../dictionary/error-message.dictionary';

export class CommonDatabase {
  protected db: JsonDB;

  constructor() {
    this.db = new JsonDB(new Config('music', true, false, '/'));
  }

  delete(path: string): void {
    try {
      this.db.delete(`/${path}`);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  get<T>(path: string): T {
    try {
      return this.db.getData(`/${path}`);
    } catch (error) {
      throw new InternalServerErrorException(
        errorMessageDictionary.DATA_NOT_EXIST,
      );
    }
  }

  push<T>(path: string, data: T) {
    try {
      this.db.push(`/${path}`, data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
