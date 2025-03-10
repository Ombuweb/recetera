export type TAGS =
  | 'Vegetarian'
  | 'Vegan'
  | 'Gluten-Free'
  | 'Dairy-Free'
  | 'Nut-Free'
  | 'Paleo'
  | 'Keto'
  | 'Low-Carb'
  | 'High-Protein'
  | 'Low-Fat'
  | 'Sugar-Free'
  | 'Whole30'
  | 'Mediterranean'
  | 'Quick & Easy'
  | 'Slow Cooker'
  | 'Instant Pot'
  | 'Grill'
  | 'Baking'
  | 'Dessert'
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Snack'
  | 'Appetizer'
  | 'Side Dish'
  | 'Soup'
  | 'Salad'
  | 'Beverage';

export interface RecipeModel {
  name: string;
  ingredients: string;
  steps: string;
  image: string;
  notes: string;
  tags: TAGS[];
  user_id: number;
}
