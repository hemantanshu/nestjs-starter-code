import * as config from 'config';

const aws = config.get('aws');
const s3Config = {
    bucket: process.env.AWS_S3_BUCKET || aws.s3.bucket,
    region: process.env.AWS_S3_REGION || aws.s3.region,
    secret: process.env.AWS_SECRET || aws.s3.secret,
    key: process.env.AWS_KEY || aws.s3.key,
};

export = s3Config;
