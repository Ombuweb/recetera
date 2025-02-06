import { getRecipeDatabaseService } from '~/server/utils/database/locator';

export default defineEventHandler(async (event) => {
  try {
    const db = getRecipeDatabaseService();
    await db.createTable();
    return {
      statusCode: 201,
      body: 'Recipes table created',
    };
  } catch (error) {
    console.error('Error creating recipes table', error);
    return {
      statusCode: 500,
      body: 'Error creating recipes table' + error,
    };
  }
});
