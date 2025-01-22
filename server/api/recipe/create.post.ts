import { RecipeModel } from '~/core/models/domain';
import { getRecipeDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  const db = getRecipeDatabaseService();
  const recipeFormData = await readMultipartFormData(event);

  const recipe = recipeFormData?.reduce((acc, value) => {
    const key = value.name as keyof RecipeModel;
    const arrayBuffer = value.data as Buffer<ArrayBufferLike>;
    if (key === 'tags') {
      const array = new Uint8Array(arrayBuffer);
      const text = new TextDecoder().decode(array);
      acc[key] = text.split(',');
    } else {
      acc[key] = value.data.toString();
    }
    return acc;
  }, {} as RecipeModel) as RecipeModel;
  console.log('Creating recipe:', recipe);
  const createdRecipe = await db.createRecipe(recipe);
  return createdRecipe.id;
});
