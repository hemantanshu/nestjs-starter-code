import { Injectable } from '@nestjs/common';
import { LocalPropertyService, QueueService } from '@servicelabsco/nestjs-utility-services';
import entityConstants = require('./config/entity.constants');

@Injectable()
export class AppService {
    /**
     * Creates an instance of AppService.
     * @param {LocalPropertyService} localPropertyService
     * @memberof AppService
     */
    constructor(private readonly localPropertyService: LocalPropertyService, private readonly queueService: QueueService) {
        this.setEntities();
    }

    /**
     * set the constants for entities
     * @memberof AppService
     */
    setEntities() {
        const existingEntities = this.localPropertyService.get('entities');
        this.localPropertyService.set('entities', {
            ...existingEntities,
            ...entityConstants,
        });
    }
    getHello(): string {
        return 'Hello World!';
    }
}
