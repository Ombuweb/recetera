import { index, int, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core';
// import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';

//
export const users = mysqlTable(
  'users',
  {
    id: int().autoincrement().primaryKey(),
    username: varchar({ length: 88 }).notNull(),
    password: varchar({ length: 88 }).notNull(),
    email: varchar({ length: 88 }).notNull(),
    // createdAt: datetime({ mode: 'string' }).notNull(),
  },
  (table) => [
    index('username_idx').on(table.username),
    index('email_idx').on(table.email),
  ]
);

export const recipes = mysqlTable(
  'recipes',
  {
    id: int().autoincrement().primaryKey(),
    name: text().notNull(),
    ingredients: text().notNull(),
    steps: text().notNull(),
    image: text().notNull(),
    notes: text().notNull(),
    tags: varchar({ length: 255 }).notNull(),
    user_id: int().notNull(),
    // createdAt: datetime({ mode: 'string' }).notNull(),
  },
  (table) => [
    index('user_idx').on(table.user_id),
    index('tags_idx').on(table.tags),
  ]
);
