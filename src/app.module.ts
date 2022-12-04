import { BullModule } from '@nestjs/bull';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    AuthModule,
    BasicAuthMiddleware,
    InternalMiddleware,
    JwtMiddleware,
    PlatformUtilityModule,
    RestrictedMiddleware,
    SystemModule,
} from '@servicelabsco/nestjs-utility-services';
import { CommandModule } from 'nestjs-command';
import { ConsoleModule } from 'nestjs-console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './config/typeorm.config';
import { WorkerService } from './worker.service';
import * as queueConfig from './config/queue.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        BullModule.forRoot(queueConfig),
        AuthModule,
        SystemModule,
        PlatformUtilityModule,
        CommandModule,
        ConsoleModule,
    ],
    controllers: [AppController],
    providers: [AppService, WorkerService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        consumer.apply(BasicAuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        consumer.apply(RestrictedMiddleware).forRoutes({ path: 'api/*', method: RequestMethod.ALL });
        consumer.apply(InternalMiddleware).forRoutes({ path: 'internal/*', method: RequestMethod.ALL });
    }
}
