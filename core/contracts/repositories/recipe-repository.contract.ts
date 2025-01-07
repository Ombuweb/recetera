// This is the contract between the RecipeRepository and the RecipeService.
// The RecipeRepository implements this contract. and the RecipeService expects any object that implements this contract.
import type { RecipeModel } from '~/core/models/domain';

export interface IRecipeRepository {
  endpoint: string;
  getRecipes(): Promise<RecipeModel[]>;
  getRecipe(id: string): Promise<RecipeModel>;
  createRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  updateRecipe(recipe: RecipeModel): Promise<RecipeModel>;
  deleteRecipe(id: string): Promise<void>;
}
