import { type IRecipeDatabaseService } from '~/core/contracts/services';
import type { RecipeModel } from '~/core/models/domain';
import { createDatabase, Database } from 'db0';
import mysql from 'db0/connectors/mysql2';
import mysqlPromise from 'mysql2/promise';

import { ConnectionOptions, FieldPacket, ResultSetHeader } from 'mysql2';
import { DrizzleDatabase } from 'db0/integrations/drizzle';
import { tables } from '../sql/drizzle';
import { drizzle } from 'drizzle-orm/mysql2';

export class RecipeLocalSQLDatabaseService implements IRecipeDatabaseService {
  private mysqlDB: Database;
  private drizzleDB: ReturnType<typeof drizzle>;
  constructor(private dbOptions: ConnectionOptions) {
    this.mysqlDB = createDatabase(mysql(dbOptions));
    this.drizzleDB = drizzle(process.env.DATABASE_URL as string);
  }

  async getRecipes() {
    // let recipes: RecipeModel[] = [];
    // try {
    //   const _recipes = await this.drizzleDB.select().from(tables.recipes).all();
    // } catch (error) {
    //   console.error('Error fetching recipes', error);
    // }
    return [];
  }

  async getRecipe(id: string) {
    // Fetch a recipe from the SQL database.

    return {} as RecipeModel;
  }

  async createRecipe(recipe: RecipeModel) {
    // Create a recipe in the SQL database using prepared statement via connection.execute().
    try {
      const connection = await mysqlPromise.createConnection(this.dbOptions);

      const sql =
        'INSERT INTO `recipes` (`name`, `ingredients`, `steps`, `image`, `notes`, `tags`, `user`) VALUES (?, ?, ?, ?, ?, ?, ?)';
      const values = [
        recipe.name,
        recipe.ingredients,
        recipe.steps,
        recipe.image,
        recipe.notes,
        recipe.tags.join(','),
        recipe.user,
      ];

      const [result, fields]: [ResultSetHeader, FieldPacket[]] =
        await connection.execute(sql, values);
      console.log('created recipe with id: ', result.insertId);
      console.log(fields);
      return result.insertId.toString();
    } catch (error) {
      console.error('Error creating recipe', error);
      return '';
    }
  }

  async updateRecipe(recipe: RecipeModel) {
    // Update a recipe in the SQL database.
    return recipe;
  }

  async deleteRecipe(id: string) {
    // Delete a recipe from the SQL database.
  }
}
