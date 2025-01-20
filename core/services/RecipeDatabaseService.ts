import type { IRecipeDatabaseService } from '~/core/contracts/services';
import type { IRecipeDatabaseRepository } from '../contracts/repositories';
import type { RecipeModel } from '../models/domain';

export class RecipeDatabaseService implements IRecipeDatabaseService {
  constructor(
    private readonly recipeDatabaseRepository: IRecipeDatabaseRepository
  ) {}

  async getRecipes(): Promise<RecipeModel[]> {
    return this.recipeDatabaseRepository.getRecipes();
  }

  async getRecipe(id: string): Promise<RecipeModel> {
    return this.recipeDatabaseRepository.getRecipe(id);
  }

  async createRecipe(recipe: RecipeModel): Promise<RecipeModel> {
    return this.recipeDatabaseRepository.createRecipe(recipe);
  }

  async updateRecipe(recipe: RecipeModel): Promise<RecipeModel> {
    return this.recipeDatabaseRepository.updateRecipe(recipe);
  }

  async deleteRecipe(id: string): Promise<void> {
    return this.recipeDatabaseRepository.deleteRecipe(id);
  }
}
