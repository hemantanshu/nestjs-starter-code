import { Controller, Get, Param } from '@nestjs/common';
import { Auth, QueueService } from '@servicelabsco/nestjs-utility-services';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly queueService: QueueService) {}

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @Get('internal/test')
    check() {
        return 'am here';
    }

    @Get('api/auth')
    async auth() {
        return Auth.user();
    }

    @Get('failed-jobs')
    async getFailedJobs() {
        return this.queueService.getFailedJobs(0, 100);
    }

    @Get('queue/:id')
    async getQueueDetails(@Param('id') id: number) {
        return this.queueService.getJobDetails(id);
    }

    @Get('queue')
    async getQueue() {
        const runningStats = await this.queueService.getStats();
        const jobStats = await this.queueService.getQueueStats();

        return { runningStats, jobStats };
    }

    @Get('set')
    async set() {}
}
