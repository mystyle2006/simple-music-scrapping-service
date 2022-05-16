import axios from 'axios';

import { LoggerWrapper } from './logger.wrapper';

class AxiosWrapper extends LoggerWrapper {
  constructor() {
    super(AxiosWrapper.name);
  }

  async get(host: string): Promise<any> {
    try {
      const { data } = await axios.get(host);
      return data;
    } catch (error) {
      this.logger.error(error.message);
      return null;
    }
  }
}

export const axiosWrapper = new AxiosWrapper();
