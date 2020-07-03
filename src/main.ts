import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as session from 'express-session';
import * as passport from 'passport';
import * as httpContext from 'express-http-context';

import * as sessionConfig from '../config/session.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(session(sessionConfig));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(httpContext.middleware);

  //starting the server on the defined port
  const port = config.get('server').port;
  await app.listen(port);
}
bootstrap();
