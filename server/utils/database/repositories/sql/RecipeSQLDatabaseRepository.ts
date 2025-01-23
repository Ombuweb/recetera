import { type IRecipeDatabaseRepository } from '~/core/contracts/repositories';
import type { RecipeModel } from '~/core/models/domain';
import { createDatabase, Database, ExecResult, Primitive } from 'db0';
import mysql from 'db0/connectors/mysql2';
import { ConnectionOptions } from 'mysql2';
import { drizzle, DrizzleDatabase } from 'db0/integrations/drizzle';
import { tables, useDrizzle } from './dizzle';

export class RecipeSQLDatabaseRepository implements IRecipeDatabaseRepository {
  private mysqlDB: Database;
  private db: DrizzleDatabase;
  constructor(dbOptions: ConnectionOptions) {
    this.mysqlDB = createDatabase(mysql(dbOptions));
    const drizzleDb = drizzle(this.mysqlDB);
    this.db = drizzleDb;
  }

  async createTable() {
    //   id: string;
    // name: string;
    // ingredients: string;
    // steps: string;
    // image: string;
    // notes: string;
    // tags: string[];
    // user: string;
    try {
      await this.mysqlDB.exec(`
        CREATE TABLE IF NOT EXISTS recipes (
          id VARCHAR(255) PRIMARY KEY,
          name VARCHAR(255),
          ingredients TEXT,
          steps TEXT,
          image TEXT,
          notes TEXT,
          tags TEXT,
          user VARCHAR(255)
        );
      `);
    } catch (error) {
      console.error('Error creating the recipes table', error);
    }
  }
  async getRecipes() {
    let recipes: RecipeModel[] = [];
    try {
      const rows: any[] = await this.mysqlDB.sql` SELECT * FROM recipes`;

      // recipes = rows.map((row) => ({
      //   id: row.id,
      //   name: row.name,
      //   description: row.description,
      //   ingredients: JSON.parse(row.ingredients),
      //   steps: JSON.parse(row.steps),
      //   image: row.imageUrl,
      // }));
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
      const result = useDrizzle()
        .insert(tables.recipes)
        .values({
          // id: recipe.id,
          name: recipe.name,
          ingredients: recipe.ingredients,
          steps: recipe.steps,
          image: recipe.image,
          notes: recipe.notes,
          tags: JSON.stringify(recipe.tags),
          user: recipe.user,
        });
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
