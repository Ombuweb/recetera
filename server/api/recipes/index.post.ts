import { RecipeModel } from '~/core/models/domain';
import { useRecipeDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  try {
    const db = await useRecipeDatabaseService();
    const recipe = formatRecipeForDB(
      await readMultipartFormData(event)
    ) as RecipeModel;
    // const recipe = (await readBody(event)) as RecipeModel;
    console.log('Creating recipe in API');
    const createdRecipeID = await db.createRecipe(recipe);
    // return await db.createRecipe({} as RecipeModel);
    setResponseHeader(event, 'Location', `/recipes/${createdRecipeID}`);
    return {
      statusCode: 201,
      body: JSON.stringify({ id: createdRecipeID }),
    };
  } catch (error: any) {
    console.error('Error creating recipe', error);
    throw createError({ statusCode: 500, message: error.message });
  }
});
