const corsConfig = {
    origin: true,
    methods: ['POST', 'GET', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    credentials: true,
    maxAge: 3600,
};

export = corsConfig;
