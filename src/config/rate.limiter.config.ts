import * as config from 'config';

const rate = config.get('rate');

const rateLimiterConfig = {
    windowMs: process.env.RATE_WINDOW || rate.window, // 15 minutes
    max: process.env.RATE_LIMIT || rate.limit, // limit each IP to 100 requests per windowMs
};

export = rateLimiterConfig;
