import type { RouteOptions } from 'fastify';
import { FontHandler } from '../handler';

export const fontRoutes: RouteOptions[] = [
  {
    method: 'GET',
    url: '/',
    handler: FontHandler.getFontCss,
  },
  {
    method: 'GET',
    url: '/font-file/*',
    handler: FontHandler.getFont,
  },
];
