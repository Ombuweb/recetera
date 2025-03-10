import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  schema: './server/utils/database/sql/schema.ts',
  out: './server/utils/database/sql/migrations',
});
