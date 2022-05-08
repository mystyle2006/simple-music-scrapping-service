import axios from 'axios';

class AxiosWrapper {
  async get(host: string): Promise<any> {
    try {
      const { data } = await axios.get(host);
      return data;
    } catch (error) {
      return null;
    }
  }
}

export const axiosWrapper = new AxiosWrapper();
