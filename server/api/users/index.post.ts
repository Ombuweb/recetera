import { IUser } from '~/core/models/domain';
import { useUserDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  try {
    const db = await useUserDatabaseService();
    // const recipe = formatRecipeForDB(
    //   await readMultipartFormData(event)
    // ) as RecipeModel;
    const user = (await readBody(event)) as IUser;
    console.log('Creating user in API');
    await db.createUser(user);
    // return await db.createRecipe({} as RecipeModel);
  } catch (error: any) {
    console.error('Error creating recipe', error);
    throw createError({ statusCode: 500, message: error.message });
  }
});
