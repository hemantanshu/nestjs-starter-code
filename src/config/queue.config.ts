import { BullModuleOptions } from '@nestjs/bull';
import 'dotenv/config';

const host = process.env.REDIS_HOST;
const port = parseInt(process.env.REDIS_PORT, 10);
const completeLimit = parseInt(process.env.BULL_QUEUE_COMPLETE_LIMIT, 10);
const failureLimit = parseInt(process.env.BULL_QUEUE_FAILURE_LIMIT, 10);

const queueConfig: BullModuleOptions = {
    redis: {
        host,
        port,
    },
    defaultJobOptions: {
        removeOnComplete: completeLimit || 100000,
        removeOnFail: failureLimit || 10000,
    },
};

export = queueConfig;
