import {config} from 'dotenv';

config();

export const environment = {
    production: process.env.PRODUCTION,
    dbConfig: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME
    }
};

export function isProduction(): boolean {
    return environment.production === 'true';
}

