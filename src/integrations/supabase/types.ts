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
      user_credits: {
        Row: {
          user_id: string
          balance: number
          total_earned: number
          total_spent: number
          last_updated: string
        }
        Insert: {
          user_id: string
          balance?: number
          total_earned?: number
          total_spent?: number
          last_updated?: string
        }
        Update: {
          user_id?: string
          balance?: number
          total_earned?: number
          total_spent?: number
          last_updated?: string
        }
      }
      credit_packages: {
        Row: {
          id: number
          base_price: number
          credits_per_package: number
          created_at: string
          updated_at: string
        }
      }
      meal_plans: {
        Row: {
          id: number
          user_id: string
          credits_used: number
          dietary_restrictions: string[]
          cuisine_preferences: string[]
          meal_count: number
          created_at: string
        }
        Insert: {
          user_id: string
          credits_used: number
          dietary_restrictions: string[]
          cuisine_preferences: string[]
          meal_count: number
          created_at?: string
        }
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
        Returns: boolean
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