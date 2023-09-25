import 'dotenv/config';
const constants = {
    queue: process.env.BULL_QUEUE_NAME,
    db: {
        max_number_value: 214748364,
    },
    app_url: process.env.SERVER_URL,
    api_url: process.env.SERVER_URL,
};

export = constants;
