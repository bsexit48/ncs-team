export type AppEnv = 'development' | 'staging' | 'production';

const env = (process.env.NEXT_PUBLIC_APP_ENV || 'development') as AppEnv;

const config = require(`./config.${env}`).default;
config.environment = env;

export default config;
