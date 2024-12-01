export interface Meal {
  id: string;
  title: string;
  description: string;
  image: string;
  calories: number;
  protein: string;
  carbs: string;
  fats: string;
  conditions: string[];
  ingredients: string[];
  benefits: string[];
  whyItWorks: string;
  recipe: {
    prepTime: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    instructions: string[];
    tips: string[];
  };
}