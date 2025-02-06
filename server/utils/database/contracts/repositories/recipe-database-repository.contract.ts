import type { RecipeModel } from '~/core/models/domain';

export interface IRecipeDatabaseRepository {
  createTable(): Promise<void>;
  getRecipes(): Promise<RecipeModel[]>;
  getRecipe(id: string): Promise<RecipeModel>;
  createRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  updateRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  deleteRecipe(id: string): Promise<void>;
}
