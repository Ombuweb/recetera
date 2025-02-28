import { index, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';
// import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';

const columns = {
  id: int().autoincrement().primaryKey(),
  name: text().notNull(),
  ingredients: text().notNull(),
  steps: text().notNull(),
  image: text().notNull(),
  notes: text().notNull(),
  tags: varchar({ length: 255 }).notNull(),
  user: varchar({ length: 88 }).notNull(),
  // createdAt: datetime({ mode: 'string' }).notNull(),
};
//

export const recipes = mysqlTable('recipes', columns, (table) => [
  index('user_idx').on(table.user),
  index('tags_idx').on(table.tags),
]);
