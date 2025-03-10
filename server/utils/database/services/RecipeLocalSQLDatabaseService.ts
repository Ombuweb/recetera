import { type IRecipeDatabaseService } from '~/core/contracts/services';
import type { RecipeModel } from '~/core/models/domain';
import { like, tables, eq, sql } from '../sql/drizzle';
import { drizzle } from 'drizzle-orm/mysql2';
import { getConnection } from '../sql/mysql2Connection';

export class RecipeLocalSQLDatabaseService implements IRecipeDatabaseService {
  private drizzleORM!: ReturnType<typeof drizzle>;

  private constructor() {}

  static async createInstance(): Promise<RecipeLocalSQLDatabaseService> {
    const instance = new RecipeLocalSQLDatabaseService();
    await instance.initialize();
    return instance;
  }
  private async initialize() {
    const connection = await getConnection();
    this.drizzleORM = drizzle(connection);
  }

  async createRecipe(recipe: RecipeModel) {
    console.log('Creating recipe in SErv: ', recipe);
    // Create a recipe in the SQL database using prepared statement via connection.execute().
    try {
      const preparedStatement = this.drizzleORM
        .insert(tables.recipes)
        .values({
          name: recipe.name,
          ingredients: recipe.ingredients,
          steps: recipe.steps,
          image: recipe.image,
          notes: recipe.notes,
          tags:
            typeof recipe.tags === 'string'
              ? recipe.tags
              : recipe.tags?.join(','),
          user_id: recipe.user_id,
        })
        .prepare();

      const [result, fields] = await preparedStatement.execute();
      console.log('created recipe with id: ', result.insertId);
      console.log(fields);
      return result.insertId.toString();
    } catch (error) {
      console.error('Error creating recipe', error);
      return '';
    }
  }

  async getRecipe(id: string) {
    // Fetch a recipe from the SQL database.

    return {} as RecipeModel;
  }

  async getRecipes() {
    let recipes: RecipeModel[] = [];
    try {
      const rows = await this.drizzleORM
        .select()
        .from(tables.recipes)
        .execute();
      const userReplacedWithUserId = rows.map((row) => {
        return { ...row };
      });
      console.log('Rows: ', userReplacedWithUserId);
      recipes = [...(userReplacedWithUserId as unknown as RecipeModel[])];
      console.log('Recipes: ', recipes);
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
    return recipes;
  }

  async getRecipesByUser(user_id: number) {
    try {
      const preparedStatement = this.drizzleORM
        .select()
        .from(tables.recipes)
        .where(like(tables.recipes.user_id, sql.placeholder('user')))
        // .leftJoin(tables.users, eq(tables.recipes.user, tables.users.id))
        .prepare();

      const rows = await preparedStatement.execute({ user: user_id });
      console.log(`Recipes for user ${user_id}: `, rows, rows.length);
      return rows as unknown as RecipeModel[];
    } catch (error) {
      console.error('Error fetching recipes', error);
      return [];
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
