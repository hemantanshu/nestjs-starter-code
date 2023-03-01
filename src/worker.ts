import { NestFactory } from '@nestjs/core';
import { ShutdownService } from '@servicelabsco/nestjs-utility-services';
import { AppModule } from './app.module';

// tslint:disable-next-line: no-var-requires
require('source-map-support').install();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // tslint:disable-next-line: no-unused-expression

    app.get(ShutdownService).subscribeToShutdown(() => {
        app.close().then(() => {
            process.exit(1);
        });
    });

    app.init();
}

bootstrap();
