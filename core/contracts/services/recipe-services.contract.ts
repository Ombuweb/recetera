import type { Recipe } from '~/core/models/domain';

export interface IRecipeService {
  getRecipes(): Promise<Recipe[]>;
  getRecipe(id: string): Promise<Recipe>;
  createRecipe(recipe: Recipe): Promise<Recipe>;
  updateRecipe(recipe: Recipe): Promise<Recipe>;
  deleteRecipe(id: string): Promise<void>;
}
