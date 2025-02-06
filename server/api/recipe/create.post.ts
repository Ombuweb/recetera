import { RecipeModel } from '~/core/models/domain';
import { getRecipeDatabaseService } from '~/server/utils/database/locator';
import formatRecipeFormDataForDB from '~/server/utils/formatRecipeForDB';

export default defineEventHandler(async (event) => {
  const db = getRecipeDatabaseService();
  const recipeFormData = await readMultipartFormData(event);

  const recipe = formatRecipeFormDataForDB(recipeFormData) as RecipeModel;
  console.log('Creating recipe:', recipe);
  const createdRecipe = await db.createRecipe(recipe);
  return createdRecipe.id;
});
