import { useRecipeDatabaseService } from '~/server/utils/database/locator';
defineRouteMeta({
  openAPI: {
    description: 'Get all recipes',
    responses: {
      200: {
        description: 'An array of recipes',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Recipe',
              },
            },
          },
        },
      },
      204: {
        description: 'No recipes found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  },
});
export default defineEventHandler(async (event) => {
  try {
    const db = await useRecipeDatabaseService();
    const recipes = await db.getRecipes();
    if (recipes.length === 0) {
      return {
        statusCode: 204, // No content
        body: JSON.stringify({ message: 'No recipes found' }),
      };
    } else {
      return {
        statusCode: 200,
        body: JSON.stringify(recipes),
      };
    }
  } catch (error: any) {
    console.error('Error getting recipes', error);
    throw createError({ statusCode: 500, message: error.message });
  }
});
