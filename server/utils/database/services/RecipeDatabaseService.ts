import { IRecipeDatabaseRepository } from '../contracts/repositories';
import { IRecipeDatabaseService } from '../contracts/services';
import { RecipeModel } from '~/core/models/domain';

export class RecipeDatabaseService implements IRecipeDatabaseService {
  constructor(private recipeRepository: IRecipeDatabaseRepository) {}

  async getRecipes() {
    return this.recipeRepository.getRecipes();
  }

  async getRecipe(id: string) {
    return this.recipeRepository.getRecipe(id);
  }

  async createRecipe(recipe: RecipeModel) {
    return this.recipeRepository.createRecipe(recipe);
  }

  async updateRecipe(recipe: RecipeModel) {
    return this.recipeRepository.updateRecipe(recipe);
  }

  async deleteRecipe(id: string) {
    return this.recipeRepository.deleteRecipe(id);
  }
}
