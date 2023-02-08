import cors from '@fastify/cors';
import dotenv from 'dotenv';
import fastify from 'fastify';
import { RouteService } from './service';

dotenv.config();

const app = fastify({ logger: true });
const port = process.env.PORT || 3001;

// register Cors to APP
app.register(cors, {
  origin: (origin, cb) => {
    cb(null, true);
  },
});

// Register all routes
RouteService.registerRoutes(app);

app.get('/', (req, res) => {
  res.type('text/html').send(`
            <h1><a href="https://itwwworks.de/">itwwworks</a></h1>
        `);
});

export { app, port };
