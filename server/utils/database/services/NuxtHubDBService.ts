import { IRecipeDatabaseService } from '~/core/contracts/services';
import { RecipeModel } from '~/core/models/domain';
import { DrizzleInstance, tables, useDrizzle, like, eq } from '../sql/drizzle';
import { DrizzleDatabase } from 'db0/integrations/drizzle';

export class NuxtHubDBService implements IRecipeDatabaseService {
  constructor(private drizzleD1DB: DrizzleDatabase | DrizzleInstance) {}

  // async getRecipesWithTag(tag: string): Promise<RecipeModel[]> {
  //   const recipes = await this.drizzleD1DB
  //     .select()
  //     .from(tables.recipes)
  //     .where(like(tables.recipes.tags, `%${tag}%`))
  //     // .leftJoin(tables.users, eq(tables.recipes.user, tables.users.id));
  // }

  async getRecipes(): Promise<RecipeModel[]> {
    const recipes = await this.drizzleD1DB.select().from(tables.recipes).all();
    console.log('Getting recipes');
    return [];
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

  async updateRecipe(recipe: RecipeModel): Promise<RecipeModel> {
    console.log('Updating recipe');
    return recipe;
  }

  async deleteRecipe(id: string): Promise<void> {
    console.log('Deleting recipe');
  }
}
