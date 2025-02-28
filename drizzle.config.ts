import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  dbCredentials: {
    host: 'localhost',
    user: 'root',
    password: 'StrongPass1!',
    database: 'my_database',
  },
  schema: './server/utils/database/sql/schema.ts',
  out: './server/utils/database/sql/migrations',
});
