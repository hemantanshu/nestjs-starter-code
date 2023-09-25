import { HttpException, INestApplication } from '@nestjs/common';
import * as Sentry from '@sentry/node';
import { RavenInterceptor } from 'nest-raven';
import 'dotenv/config';

const dsn = process.env.SENTRY_DSN;

/**
 * manage sentry registration and its capturing
 * @export
 * @class SentryConfig
 */
export class SentryConfig {
    /**
     * Creates an instance of SentryConfig.
     * @param {INestApplication} app
     * @memberof SentryConfig
     */
    constructor(app: INestApplication) {
        // check if raven is registered or not to be used
        if (!dsn) return;

        this.setupSentry();
        this.setupGlobalInterceptor(app);
    }

    /**
     * setting up the sentry registration
     * @memberof SentryConfig
     */
    async setupSentry() {
        try {
            Sentry.init({
                dsn,
                debug: false,
                environment: process.env.SERVER_ENV,
                attachStacktrace: true,
            });
        } catch (error) {}
    }

    /**
     * setting up the global interceptor so that all of the errors are reported
     * @param {*} app
     * @memberof SentryConfig
     */
    async setupGlobalInterceptor(app) {
        app.useGlobalInterceptors(
            new RavenInterceptor({
                filters: [
                    {
                        type: HttpException,
                        filter: (exception: HttpException) => 500 > exception.getStatus(),
                    },
                ],
            })
        );
    }
}
