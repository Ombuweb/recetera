import type { IRecipeService } from '@/core/contracts/services/recipe-services.contract';
import { RecipeService } from '~/core/services/RecipeService';

// Services
let recipeService: IRecipeService;

// Services Providers
export const getRecipeService = (): IRecipeService => {
  if (!recipeService) {
    recipeService = new RecipeService();
  }

  return recipeService;
};
