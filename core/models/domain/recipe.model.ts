export interface RecipeModel {
  id: string;
  name: string;
  ingredients: string;
  steps: string;
  image: string;
  notes: string;
  tags: string[];
  user: string;
}
