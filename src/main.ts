import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ShutdownService } from '@servicelabsco/nestjs-utility-services';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as config from 'config';
import * as httpContext from 'express-http-context';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import 'source-map-support/register';
import { AppModule } from './app.module';
import * as corsConfig from './config/cors.config';
import rateLimiterConfig = require('./config/rate.limiter.config');

// tslint:disable-next-line: no-var-requires
require('source-map-support').install();

// set stack trace limit to higher number
Error.stackTraceLimit = 100;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(bodyParser.json());
    app.use(httpContext.middleware);

    app.use(helmet());
    app.enableCors(corsConfig);
    app.use(rateLimit(rateLimiterConfig));
    app.use(compression());

    // tslint:disable-next-line: no-unused-expression
    // new SentryConfig(app);

    // Subscribe to your service's shutdown event, run app.close() when emitted
    app.get(ShutdownService).subscribeToShutdown(() => {
        app.close().then(() => {
            process.exit(1);
        });
    });

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

    // starting the server on the defined port
    const port = config.get('server').port;
    await app.listen(port);
}
bootstrap();
