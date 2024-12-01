export interface Meal {
  id: string;
  title: string;
  description: string;
  image: string;
  calories: number;
  protein: string;
  carbs: string;
  conditions: string[];
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