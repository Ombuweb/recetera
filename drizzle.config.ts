import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  schema: './server/utils/database/repositories/sql/schema.ts',
  out: './server/utils/database/repositories/slq/migrations',
});
