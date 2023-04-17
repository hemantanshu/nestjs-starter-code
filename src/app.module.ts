import { BullModule } from '@nestjs/bull';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    AuthController,
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
import { CommonModule } from './common/common.module';
import * as queueConfig from './config/queue.config';
import * as ormconfig from './config/typeorm.config';
import { WorkerService } from './worker.service';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        BullModule.forRoot(queueConfig),
        CommonModule,
        AuthModule,
        SystemModule,
        PlatformUtilityModule,
        CommandModule,
        ConsoleModule,
    ],
    controllers: [AppController, AuthController],
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
