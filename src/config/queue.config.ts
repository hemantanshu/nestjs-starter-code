import * as config from 'config';

const queue = config.get('queue');
const redis = config.get('redis');

const host = redis.host;

const queueConfig: any = {
    redis: {
        host: process.env.REDIS_HOST || `${host}`,
        port: process.env.REDIS_PORT || redis.port,
    },
    defaultJobOptions: {
        removeOnComplete: process.env.QUEUE_COMPLETE_LIMIT || queue.completeLimit,
        removeOnFail: process.env.QUEUE_FAILURE_LIMIT || queue.failureLimit,
        delay: process.env.QUEUE_DEFAULT_DELAY || queue.defaultDelay,
    },
};

export = queueConfig;
