import { RecipeModel } from '~/core/models/domain';

defineRouteMeta({
  openAPI: {
    description: 'Get a recipe by ID',
    parameters: [
      {
        in: 'path',
        name: 'id',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'A recipe',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Recipe',
            },
          },
        },
      },
      404: {
        description: 'Recipe not found',
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
  const recipe: RecipeModel = {
    name: 'name',
    image: 'image',
    ingredients: 'ingredients',
    steps: 'steps',
    notes: 'notes',
    tags: [],
    user_id: 1,
  };
  return {
    statusCode: 200,
    body: JSON.stringify(recipe),
  };
});
