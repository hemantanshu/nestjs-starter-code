import { Injectable, OnModuleInit } from '@nestjs/common';
import { QueueService } from '@servicelabsco/nestjs-utility-services';

import * as config from 'config';

@Injectable()
export class WorkerService implements OnModuleInit {
    constructor(private readonly queueService: QueueService) {}

    async onModuleInit(): Promise<void> {
        const worker = process.env.QUEUE_WORKER_ENABLE || config.get('queue.worker');
        if (!worker) {
            global.console.log(`queue services are disabled for this instance`);
            await this.queueService.pause();
        }
    }
}
