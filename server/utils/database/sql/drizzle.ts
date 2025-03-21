export { sql, eq, and, or, like } from 'drizzle-orm';
import * as schema from './schema';

export const tables = schema;

export type Recipe = typeof schema.recipes.$inferSelect;
export type User = typeof schema.users.$inferSelect;
