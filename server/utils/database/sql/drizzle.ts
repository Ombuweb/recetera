import { drizzle } from 'drizzle-orm/d1';
export { sql, eq, and, or, like } from 'drizzle-orm';

import * as schema from './schema';

export const tables = schema;

export function useDrizzle() {
  return drizzle(hubDatabase(), { schema });
}
export type DrizzleInstance = ReturnType<typeof useDrizzle>;

export type Recipe = typeof schema.recipes.$inferSelect;
