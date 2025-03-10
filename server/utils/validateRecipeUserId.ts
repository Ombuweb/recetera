export default function validateRecipeUserId(id: string): number {
  const userIdStr = id;
  if (!userIdStr) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required',
    });
  }
  const userIdInt = parseInt(userIdStr, 10);
  if (isNaN(userIdInt)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID must be a number',
    });
  }
  if (!Number.isInteger(userIdInt) || userIdInt < 1) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID must be a positive non zero integer',
    });
  }
  return userIdInt;
}
