import { RecipeModel } from '~/core/models/domain';
import { getRecipeDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  const db = getRecipeDatabaseService();
  const recipe = (await readBody(event)) as RecipeModel;
  const createdRecipe = await db.createRecipe(recipe);
  return createdRecipe.id;
});
