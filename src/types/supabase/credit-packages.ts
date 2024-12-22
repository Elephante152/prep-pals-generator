export type CreditPackage = {
  id: string
  base_price: number
  credits_per_package: number
  created_at: string
  updated_at: string
}

export type CreditPackageInsert = Omit<CreditPackage, 'id' | 'created_at' | 'updated_at'>
export type CreditPackageUpdate = Partial<CreditPackageInsert>