import { BullModule } from '@nestjs/bull';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {
    AuthModule,
    BasicAuthMiddleware,
    InternalMiddleware,
    JwtMiddleware,
    PlatformUtilityModule,
    RestrictedMiddleware,
    ShutdownService,
    SystemModule,
    WorkerService,
} from '@servicelabsco/nestjs-utility-services';
import { CommandModule } from 'nestjs-command';
import { ConsoleModule } from 'nestjs-console';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import * as queueConfig from './config/queue.config';
import * as readOrmconfig from './config/read.typeorm.config';
import * as ormconfig from './config/typeorm.config';

@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        TypeOrmModule.forRoot(readOrmconfig),
        BullModule.forRoot(queueConfig),
        ConfigModule.forRoot({ isGlobal: true }),
        CommonModule,
        AuthModule,
        SystemModule,
        PlatformUtilityModule,
        CommandModule,
        ConsoleModule,
    ],
    controllers: [AppController],
    providers: [AppService, WorkerService, ShutdownService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        consumer.apply(BasicAuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
        consumer.apply(RestrictedMiddleware).forRoutes({ path: 'api/*', method: RequestMethod.ALL });
        consumer.apply(InternalMiddleware).forRoutes({ path: 'internal/*', method: RequestMethod.ALL });
    }
}
