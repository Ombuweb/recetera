import { useRecipeDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  const db = await useRecipeDatabaseService();
  const recipes = await db.getRecipes();
  return recipes;
});
