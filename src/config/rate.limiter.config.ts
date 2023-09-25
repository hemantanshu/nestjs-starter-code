import 'dotenv/config';

const rateLimiterConfig = {
    windowMs: parseInt(process.env.THROTTLE_WINDOW, 10) || 60000, // 15 minutes
    max: parseInt(process.env.THROTTLE_RATE, 10) || 10000, // limit each IP to 100 requests per windowMs
};

export = rateLimiterConfig;
