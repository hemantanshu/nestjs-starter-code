import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import * as config from 'config';
import { RedisClient } from 'redis';
import { ServerOptions } from 'socket.io';

const redis = config.get('redis');

const host = process.env.REDIS_HOST || redis.host;
const redisPort = process.env.REDIS_PORT || redis.port;
const prefix = process.env.REDIS_SLUG || redis.slug;

const pubClient = new RedisClient({ host, port: redisPort, prefix });
const subClient = pubClient.duplicate();
const redisAdapter = createAdapter(pubClient, subClient);

/**
 * creates a pub sub server for the inter server communication
 * @export
 * @class RedisIoAdapter
 * @extends {IoAdapter}
 */
export class RedisIoAdapter extends IoAdapter {
    /**
     * create IO server for cross server pub sub
     * @param {number} port
     * @param {ServerOptions} [options]
     * @return {*}  {*}
     * @memberof RedisIoAdapter
     */
    createIOServer(port: number, options?: ServerOptions): any {
        const server = super.createIOServer(port, options);
        server.adapter(redisAdapter);
        return server;
    }
}
