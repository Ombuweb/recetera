import { type IRecipeDatabaseRepository } from '~/core/contracts/repositories';
import type { RecipeModel } from '~/core/models/domain';
import { createDatabase, Database, ExecResult } from 'db0';
import mysql from 'db0/connectors/mysql2';
import { ConnectionOptions } from 'mysql2';
import { drizzle, DrizzleDatabase } from 'db0/integrations/drizzle';

export class RecipeSQLDatabaseRepository implements IRecipeDatabaseRepository {
  private mysqlDB: Database;
  private db: DrizzleDatabase;
  constructor(dbOptions: ConnectionOptions) {
    this.mysqlDB = createDatabase(mysql(dbOptions));
    const drizzleDb = drizzle(this.mysqlDB);
    this.db = drizzleDb;
  }
  // async createTable() {
  //   try {
  //     await this.mysqlDB.exec(`
  //       CREATE TABLE IF NOT EXISTS recipes (
  //         id VARCHAR(255) PRIMARY KEY,
  //         name VARCHAR(255),
  //         description TEXT,
  //         ingredients TEXT,
  //         steps TEXT,
  //         imageUrl VARCHAR(255
  //       );
  //     `);
  //   } catch (error) {
  //     console.error('Error creating the recipes table', error);
  //   }
  // }
  async getRecipes() {
    let recipes: RecipeModel[] = [];
    try {
      const rows: any[] = await this.mysqlDB.sql` SELECT * FROM recipes`;

      recipes = rows.map((row) => ({
        id: row.id,
        name: row.name,
        description: row.description,
        ingredients: JSON.parse(row.ingredients),
        steps: JSON.parse(row.steps),
        imageUrl: row.imageUrl,
      }));
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
    return [];
  }

  async getRecipe(id: string) {
    // Fetch a recipe from the SQL database.

    return {} as RecipeModel;
  }

  async createRecipe(recipe: RecipeModel) {
    // Create a recipe in the SQL database.
    try {
      const result: ExecResult = await this.mysqlDB.sql`
        INSERT INTO recipes (id, name, description, ingredients, steps, imageUrl)
        VALUES (
          ${recipe.id},
          ${recipe.name},
          ${recipe.description},
          ${JSON.stringify(recipe.ingredients)},
          ${JSON.stringify(recipe.steps)},
          ${recipe.imageUrl}
        )
      `;
      console.log('Result', result);
    } catch (error) {
      console.error('Error creating recipe', error);
    }
    return recipe;
  }

  async updateRecipe(recipe: RecipeModel) {
    // Update a recipe in the SQL database.
    return recipe;
  }

  async deleteRecipe(id: string) {
    // Delete a recipe from the SQL database.
  }
}
