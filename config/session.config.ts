import * as config from 'config';
import * as session from 'express-session';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const FileStore = require('session-file-store')(session);
const fileStoreOptions = {};

const age = config.get('session').cookie.age;

const configuration = {
  store: new FileStore(fileStoreOptions),
  secret: 'nest cats',
  secure: true,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: age,
  },
};

export = configuration;
