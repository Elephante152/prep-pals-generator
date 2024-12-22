export type MealPlan = {
  id: string
  user_id: string
  credits_used: number
  dietary_restrictions: string[] | null
  cuisine_preferences: string[] | null
  meal_count: number
  created_at: string
  updated_at: string
}

export type MealPlanInsert = Omit<MealPlan, 'id' | 'created_at' | 'updated_at'>
export type MealPlanUpdate = Partial<MealPlanInsert>