import { type IRecipeDatabaseRepository } from '~/core/contracts/repositories';
import type { RecipeModel } from '~/core/models/domain';
import { createDatabase, Database } from 'db0';
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
        CREATE TABLE recipes (
          id INT(11) AUTO_INCREMENT,
          PRIMARY KEY(id),
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
      const result = this.mysqlDB.sql`
        INSERT INTO recipes (name, ingredients, steps, image, notes, tags, user)
        VALUES (${recipe.name}, ${recipe.ingredients}, ${recipe.steps}, ${
        recipe.image
      }, ${recipe.notes}, ${recipe.tags.join(',')}, ${recipe.user})
      `;
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
