import type { IRecipeRepository } from '~/core/contracts/repositories';
import type { RecipeModel } from '~/core/models/domain';
const dummyRecipe = {
  id: '1',
  title: 'Dummy Recipe',
  description: 'This is a dummy recipe',
  ingredients: ['Dummy Ingredient'],
  steps: ['Dummy Step'],
  imageUrl: 'https://via.placeholder.com/150',
};
export class RecipeRepository implements IRecipeRepository {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getRecipes() {
    return [];
  }

  async getRecipe(id: string) {
    return dummyRecipe;
  }

  async createRecipe(recipe: RecipeModel) {
    return dummyRecipe;
  }

  async updateRecipe(recipe: RecipeModel) {
    return dummyRecipe;
  }

  async deleteRecipe(id: string) {
    await fetch(`${this.endpoint}/${id}`, {
      method: 'DELETE',
    });
  }
}
