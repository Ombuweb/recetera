import { RecipeModel } from '~/core/models/domain';
import { getRecipeDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  try {
    const db = getRecipeDatabaseService();
    const recipe = formatRecipeForDB(
      await readMultipartFormData(event)
    ) as RecipeModel;
    return await db.createRecipe(recipe);
  } catch (error: any) {
    return {
      status: 500,
      body: error.message,
    };
  }
});
