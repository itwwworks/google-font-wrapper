import { app, port } from './app';
import {FastifyListenOptions} from "fastify";

const listenOptions: FastifyListenOptions = {
    port: Number(port),
    host: '0.0.0.0'
};

app.listen(listenOptions, (err, address) => {
    if (err) {
        app.log.error(err.message);
        process.exit(1);
    }
});


