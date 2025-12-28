import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { MongoClient } from "mongodb";
import { appConfig } from '~/lib/env.server';

export const postgresDB = drizzle(appConfig.POSTGRES_URL);

export const mongoClient = new MongoClient(appConfig.MONGODB_URL);
export const mongoDB = mongoClient.db('vionex_default');