import type { IRecipeManagementService } from '~/core/contracts/services/recipe-service.contract';
import { RecipeService } from '~/core/services/RecipeService.model';

// Services
let recipeService: IRecipeManagementService | null = null;

// Services Providers
export const getRecipeService = (): IRecipeManagementService => {
  if (!recipeService) {
    recipeService = new RecipeService();
  }

  return recipeService;
};
