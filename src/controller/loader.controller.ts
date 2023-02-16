import { GoogleService } from '../service';
import type { ControllerReturn } from '../types/ControllerReturn.type';

export class LoaderController {
  static async loadCss(urlPath: string, userAgent: string, host: string): Promise<ControllerReturn> {
    const cssResponse = await GoogleService.loadCss(urlPath, userAgent);

    if (cssResponse.error) {
      console.log('[ERROR] - Load GoogleFont CSS File', cssResponse.data);

      return { error: true, code: 500, message: 'Error - Load GoogleFont CSS File' };
    }

    let httpProtocol = 'https';
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
      httpProtocol = 'http';
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const css = cssResponse.data.replaceAll('https://fonts.gstatic.com', `${httpProtocol}://${host}/font/font-file`);

    return {
      error: false,
      code: 200,
      message: 'Success',
      data: css,
    };
  }

  static async loadFont(urlPath: string, userAgent: string): Promise<ControllerReturn> {
    const fontResponse = await GoogleService.loadFont(urlPath, userAgent);
    if (fontResponse.error) {
      console.log('[ERROR] - Load GoogleFont File', fontResponse.data);

      return { error: true, code: 500, message: 'Error - Load GoogleFont File' };
    }

    return { error: false, code: 200, message: 'Success', data: fontResponse.data };
  }
}
