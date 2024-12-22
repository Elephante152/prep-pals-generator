export type UserCredits = {
  user_id: string
  balance: number
  created_at: string
  updated_at: string
}

export type UserCreditsInsert = Omit<UserCredits, 'created_at' | 'updated_at'>
export type UserCreditsUpdate = Partial<Omit<UserCredits, 'user_id' | 'created_at' | 'updated_at'>>