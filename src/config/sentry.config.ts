import 'dotenv/config';

const sentryConfig = {
    dsn: process.env.SENTRY_DSN,
    includeLocalVariables: true,
    attachStacktrace: true,
};

export = sentryConfig;
