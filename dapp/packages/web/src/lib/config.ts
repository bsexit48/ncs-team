import config, { AppEnv } from 'config';

const env = (process.env.NEXT_PUBLIC_APP_ENV || 'development') as AppEnv;

export const IS_PRODUCTION = env === 'production';
export const IS_DEV = !IS_PRODUCTION;

export const SENTRY_DSN = 'https://5d0371a223bb4509902f8940cb957daf@o204549.ingest.sentry.io/5741383';

export const API_URL = config.graphQLUrl;
