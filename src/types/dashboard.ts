export interface UserPreferences {
  dietType: string;
  allergies: string;
  favoriteCuisines: string[];
  activityLevel: string;
  calorieIntake: number;
  mealsPerDay: number;
  cookingTools: string[];
}

export interface MealPlan {
  id: number;
  title: string;
  plan: string;
  isMinimized: boolean;
}

export const DEFAULT_USER_PREFERENCES: UserPreferences = {
  dietType: 'Vegetarian',
  allergies: 'Nuts, Shellfish',
  favoriteCuisines: ['Italian', 'Japanese', 'Mexican'],
  activityLevel: 'Moderately Active',
  calorieIntake: 2000,
  mealsPerDay: 3,
  cookingTools: ['Stove top', 'Air fryer', 'Microwave']
};