import { RedisIoAdapter } from './adapters/redis.io.adapter';
import { ShutdownService } from './services/shutdown.service';

const es6Classes = {
    adapters: [RedisIoAdapter],
    services: [ShutdownService],
};

export default es6Classes;
