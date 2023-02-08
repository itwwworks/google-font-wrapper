import type { FastifyInstance } from 'fastify';
import { fontRoutes } from '../routes';

const routes = [
  {
    name: 'font',
    prefix: 'font',
    routes: fontRoutes,
  },
];
export class RouteService {
  static registerRoutes(fastify: FastifyInstance): void {
    routes.forEach((route) => {
      fastify.register(
        (app, opts, next) => {
          route.routes.forEach((r) => {
            app.route(r);
          });
          next();
        },
        { prefix: `/${route.prefix}` }
      );
    });
  }
}
