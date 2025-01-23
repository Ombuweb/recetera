import { int, mysqlTable, text } from 'drizzle-orm/mysql-core';
import { RecipeModel } from '~/core/models/domain';

const columns = {
  id: int().autoincrement().primaryKey(),
  name: text().notNull(),
  ingredients: text(),
  steps: text(),
  image: text(),
  notes: text(),
  tags: text(),
  user: text(),
};
export const recipes = mysqlTable('recipes', columns);
