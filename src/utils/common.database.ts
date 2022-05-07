import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

export class CommonDatabase {
  protected db: JsonDB;

  constructor() {
    this.db = new JsonDB(new Config('music', true, false, '/'));
  }

  delete(path: string): void {
    try {
      this.db.delete(`/${path}`);
    } catch (error) {
      console.error(error);
    }
  }

  get<T>(path: string): T {
    try {
      return this.db.getData(`/${path}`);
    } catch (error) {
      console.error(error);
    }
  }

  push<T>(path: string, data: T) {
    try {
      this.db.push(`/${path}`, data);
    } catch (error) {
      console.error(error);
    }
  }
}
