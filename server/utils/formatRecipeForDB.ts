import { RecipeModel } from '~/core/models/domain';
import type { MultiPartData } from 'h3';

export default function formatRecipeForDB(
  recipeFormData: MultiPartData[] | undefined
) {
  return recipeFormData?.reduce((acc, value) => {
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
}
