import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SentryConfig } from './config/sentry.config';

// tslint:disable-next-line: no-var-requires
require('newrelic');
require('source-map-support').install();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableShutdownHooks();

    // tslint:disable-next-line: no-unused-expression
    new SentryConfig(app);

    app.init();
}

bootstrap();
