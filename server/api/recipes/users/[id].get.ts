import { useRecipeDatabaseService } from '~/server/utils/database/locator';
import validateRecipeUserId from '~/server/utils/validateRecipeUserId';

export default defineEventHandler(async (event) => {
  //   const userId = getRouterParam(event, 'id');
  const db = await useRecipeDatabaseService();
  const userIdStr = getRouterParam(event, 'id');

  if (!userIdStr) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required',
    });
  }
  const userId = validateRecipeUserId(userIdStr);
  try {
    const recipes = await db.getRecipesByUser(userId);
    return recipes;
  } catch (error: any) {
    console.error('Error fetching recipes', error);
    return {
      status: 500,
      body: error.message,
    };
  }
});
