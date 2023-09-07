import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import * as pg from 'pg';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const db = config.get('db');
const dbHost = db.read_host || db.host;
const envHost = process.env.DB_READ_HOST || process.env.DB_HOST;

// set the big int column to the number when returning
pg.types.setTypeParser(20, (v: any) => {
    return parseInt(v, 10);
});

// set the decimal floating column to the number when returning
pg.types.setTypeParser(1700, (v: any) => parseFloat(v));

// Check typeORM documentation for more information.
const dbConfig: TypeOrmModuleOptions = {
    name: 'read',
    type: process.env.DB_TYPE || db.type,
    host: dbHost || envHost,
    port: process.env.DB_PORT || db.port,
    username: process.env.DB_USER || db.user,
    password: process.env.DB_PASSWORD || db.password,
    database: process.env.DB_DATABASE || db.database,

    logging: process.env.DB_DATABASE || db.logging,
    logger: 'file',

    // change the naming strategy to snake case
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        charset: 'utf8_unicode_ci',
    },
    supportBigNumbers: true,
    bigNumberStrings: false,
};

export = dbConfig;
