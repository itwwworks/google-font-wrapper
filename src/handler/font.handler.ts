import type { FastifyReply, FastifyRequest } from 'fastify';
import { LoaderController } from '../controller';

export class FontHandler {
  static async getFontCss(request: FastifyRequest, response: FastifyReply): Promise<void> {
    const { family, display } = request.query as { family: string; display?: string };

    if (!family || family === '') {
      response.status(400).send('Bad Request');

      return;
    }

    let cssPath = family;
    if (display) {
      cssPath += `&display=${display}`;
    }

    const cssResponse = await LoaderController.loadCss(cssPath, request.headers['user-agent'], request.headers.host);

    if (cssResponse.error) {
      response.status(cssResponse.code).send(cssResponse.message);

      return;
    }

    response.header('Content-Type', 'text/css');
    response.status(cssResponse.code).send(cssResponse.data);
  }

  static async getFont(request: FastifyRequest, response: FastifyReply): Promise<void> {
    const fontPath = request.url.replace('/font/font-file', '');
    const type = fontPath.split('.').pop();

    if (fontPath === '') {
      response.status(404).send('Not Found');

      return;
    }

    const fontResponse = await LoaderController.loadFont(fontPath, request.headers['user-agent']);

    if (fontResponse.error) {
      response.status(fontResponse.code).send(fontResponse.message);

      return;
    }

    response.header('Content-Type', `font/${type}`);
    response.status(fontResponse.code).send(fontResponse.data);
  }
}
