import { IRecipeDatabaseService } from '~/core/contracts/services';
import { RecipeModel } from '~/core/models/domain';
import { tables, like, eq } from '../sql/drizzle';
import { drizzle } from 'drizzle-orm/d1';

export class NuxtHubDBService implements IRecipeDatabaseService {
  private drizzleD1DB!: ReturnType<typeof drizzle>;

  static async createInstance(): Promise<NuxtHubDBService> {
    const instance = new NuxtHubDBService();
    await instance.initialize();
    return instance;
  }
  /**
   * Initialize the NuxtHubDBService
   * description: NuxtHubDBService is tightly coupled with hubDatabase() and drizzle() from drizzle-orm/d1 because it's only used in the NuxtHub project and likely to change in the future.'
   */
  private async initialize() {
    this.drizzleD1DB = await Promise.resolve(
      drizzle(hubDatabase(), { schema: tables })
    ); // Promise.resolve for consistency with other services such as RecipeLocalSQLDatabaseService
  }

  async createRecipe(recipe: RecipeModel): Promise<string> {
    console.log('Creating recipe');
    try {
      const id = Math.round(Math.random() * 1000000);

      const _recipe = await this.drizzleD1DB
        .insert(tables.recipes)
        .values({ ...recipe, tags: recipe.tags.join(',') })
        .returning()
        .get();
      return _recipe.id.toString();
    } catch (error: any) {
      console.error('Error creating recipe:', error);
      throw new Error(error.message);
    }
  }

  async getRecipe(id: string): Promise<RecipeModel> {
    console.log('Getting recipe');
    return {} as RecipeModel;
  }

  async getRecipes(): Promise<RecipeModel[]> {
    const recipes = await this.drizzleD1DB.select().from(tables.recipes).all();
    console.log('Getting recipes');
    return [];
  }
  async getRecipesByUser(user_id: number): Promise<RecipeModel[]> {
    console.log('Getting recipes by user');
    return [];
  }

  async updateRecipe(recipe: RecipeModel): Promise<RecipeModel> {
    console.log('Updating recipe');
    return recipe;
  }

  async deleteRecipe(id: string): Promise<void> {
    console.log('Deleting recipe');
  }
}
