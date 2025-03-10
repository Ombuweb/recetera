import type { RecipeModel } from '~/core/models/domain';

export interface IRecipeDatabaseService {
  // postRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  // putRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  // deleteRecipe(id: string): Promise<void>;

  getRecipes(): Promise<RecipeModel[]>;
  getRecipe(id: string): Promise<RecipeModel>;
  getRecipesByUser(user_id: number): Promise<RecipeModel[]>;
  createRecipe(recipe: RecipeModel): Promise<string>;
  updateRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  deleteRecipe(id: string): Promise<void>;
}
