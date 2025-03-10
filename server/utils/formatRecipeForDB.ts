import { RecipeModel, TAGS } from '~/core/models/domain';
import type { MultiPartData } from 'h3';

export default function formatRecipeForDB(
  recipeFormData: MultiPartData[] | undefined
) {
  console.log('Recipe Form Data: ', recipeFormData);
  return recipeFormData?.reduce((acc, value) => {
    const key = value.name as keyof RecipeModel;
    const arrayBuffer = value.data as Buffer<ArrayBufferLike>;
    if (key === 'tags') {
      const array = new Uint8Array(arrayBuffer);
      const text = new TextDecoder().decode(array);
      acc[key] = text.split(',') as TAGS[];
    } else {
      acc[key] = value.data.toString();
    }
    return acc;
  }, {} as RecipeModel) as RecipeModel;
}
