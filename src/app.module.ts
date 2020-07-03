import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@servicelabsco/nestjs-utility-services';
import * as ormconfig from '../config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
