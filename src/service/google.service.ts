import axios from 'axios';
import type { ServiceReturn } from '../types/ServiceReturn.type';

export class GoogleService {
  static async loadCss(family: string, userAgent: string): Promise<ServiceReturn> {
    return new Promise((resolve) => {
      axios
        .get(`https://fonts.googleapis.com/css2?family=${family}`, {
          headers: {
            'Content-Type': 'text/css',
            'User-Agent': userAgent,
          },
        })
        .then((response) => {
          resolve({ error: false, message: 'Success', data: response.data });
        })
        .catch((error) => {
          resolve({ error: true, message: 'Error', data: error });
        });
    });
  }

  static async loadFont(fontPath: string, userAgent: string): Promise<ServiceReturn> {
    const type = fontPath.split('.').pop();

    return new Promise((resolve) => {
      axios
        .get(`https://fonts.gstatic.com${fontPath}`, {
          headers: {
            'Content-Type': `font/${type}`,
            'User-Agent': userAgent,
          },
        })
        .then((response) => {
          resolve({ error: false, message: 'Success', data: response.data });
        })
        .catch((error) => {
          resolve({ error: true, message: 'Error', data: error });
        });
    });
  }
}
