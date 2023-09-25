import { join } from 'path';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

// Check typeORM documentation for more information.
export const connectionSource = new DataSource({
    name: 'default',
    type: 'postgres',
    host: process.env.PG_DB_HOST,
    port: parseInt(process.env.PG_DB_PORT, 10),
    username: process.env.PG_DB_USERNAME,
    password: process.env.PG_DB_PASSWORD,
    database: process.env.PG_DB_DATABASE,
    entities: [join(__dirname, '/../**/**/*.entity.{ts,js}'), join(__dirname, '..', '..', 'node_modules/@servicelabsco/**/*.entity.{ts,js}')],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // listen for subscribers
    // subscribers: [join(__dirname, '/../**/*.subscriber{.ts,.js}')],

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: process.env.PG_DB_LOGGING === 'true',
    logger: 'file',

    // allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev
    migrationsTableName: 'sys_migrations',
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}', join(__dirname, '..', '..', 'node_modules/@servicelabsco/**/migrations/**/*{.ts,.js}')],

    // change the naming strategy to snake case
    namingStrategy: new SnakeNamingStrategy(),
    extra: {
        charset: 'utf8_unicode_ci',
    },
});
