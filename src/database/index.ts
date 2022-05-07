import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

class Database {
  private db: JsonDB;

  constructor() {
    this.db = new JsonDB(new Config('music', true, false, '/'));
  }
}

export const database = new Database();
