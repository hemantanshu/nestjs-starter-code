import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// tslint:disable-next-line: no-var-requires
require('source-map-support').install();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.init();
}

bootstrap();
