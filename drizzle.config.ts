import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { appEnv } from '~/lib/env.server';

export default defineConfig({
    out: './drizzle',
    schema: './app/database/pg.schema',
    dialect: 'postgresql',
    dbCredentials: {
        url: appEnv.POSTGRES_URL,
    },
});
