import * as config from 'config';

const constants = {
    queue: process.env.QUEUE_NAME || config.get('queue.name'),
    db: {
        max_number_value: 214748364,
    },
    app_url: process.env.APP_URL || config.get('server.app_url'),
    api_url: process.env.API_URL || config.get('server.api_url'),
};

export = constants;
