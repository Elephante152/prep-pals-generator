import type { CreditPackage, CreditPackageInsert, CreditPackageUpdate } from './credit-packages'
import type { MealPlan, MealPlanInsert, MealPlanUpdate } from './meal-plans'
import type { UserCredits, UserCreditsInsert, UserCreditsUpdate } from './user-credits'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      credit_packages: {
        Row: CreditPackage
        Insert: CreditPackageInsert
        Update: CreditPackageUpdate
      }
      meal_plans: {
        Row: MealPlan
        Insert: MealPlanInsert
        Update: MealPlanUpdate
      }
      user_credits: {
        Row: UserCredits
        Insert: UserCreditsInsert
        Update: UserCreditsUpdate
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      update_user_credits: {
        Args: {
          p_user_id: string
          p_amount: number
          p_type: string
          p_description?: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']
export type Functions<T extends keyof Database['public']['Functions']> = Database['public']['Functions'][T]