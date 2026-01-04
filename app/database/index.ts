import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { MongoClient } from "mongodb";
import { appEnv } from '~/lib/env.server';

export const postgresDB = drizzle(appEnv.POSTGRES_URL);

export const mongoClient = new MongoClient(appEnv.MONGODB_URL);
export const mongoDB = mongoClient.db('vionex_default');