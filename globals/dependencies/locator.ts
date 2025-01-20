import type { IRecipeDatabaseService } from '~/core/contracts/services';
import type { IRecipeDatabaseRepository } from '~/core/contracts/repositories';
import type { IRecipeManagementService } from '~/core/contracts/services';
import { RecipeDatabaseService } from '~/core/services/RecipeDatabaseService';
import { RecipeService } from '~/core/services/RecipeService.model';

// Repositories

// Repositories Providers

// Services
let recipeService: IRecipeManagementService;
// Services Providers
// export const getRecipeService = (): IRecipeManagementService => {
//   if (!recipeService) {
//     recipeService = new RecipeService();
//   }
//   return recipeService;
// };
