import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as pg from 'pg';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

// set the big int column to the number when returning
pg.types.setTypeParser(20, (v: any) => {
    return parseInt(v, 10);
});

// set the decimal floating column to the number when returning
pg.types.setTypeParser(1700, (v: any) => parseFloat(v));

// Check typeORM documentation for more information.
const dbConfig: TypeOrmModuleOptions = {
    name: 'read',
    type: 'postgres',
    host: process.env.PG_DB_READ_HOST,
    port: parseInt(process.env.PG_DB_PORT, 10),
    username: process.env.PG_DB_USERNAME,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_DATABASE,

    logging: process.env.PG_DB_LOGGING === 'true',
    logger: 'file',

    // change the naming strategy to snake case
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        charset: 'utf8_unicode_ci',
    },
};

export = dbConfig;
