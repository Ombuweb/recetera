import mysql from 'db0/connectors/mysql2';
import { createDatabase } from 'db0';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set');
}
const params = JSON.parse(process.env.DATABASE_URL);

export const db = createDatabase(mysql(params));
