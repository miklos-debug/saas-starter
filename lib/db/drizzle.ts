import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { postgresUrl } from '@/lib/env';

export const client = postgres(postgresUrl);
export const db = drizzle(client, { schema });
