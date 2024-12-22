import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { CreditBalance } from './CreditBalance'
import { StandardPurchaseButton } from './StandardPurchaseButton'
import { CustomAmountInput } from './CustomAmountInput'

export const CreditInfo = () => {
  const { toast } = useToast()
  const [basePrice, setBasePrice] = useState(2.99)
  const [customAmount, setCustomAmount] = useState(basePrice)
  const [creditsPerPackage, setCreditsPerPackage] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [showCustomAmount, setShowCustomAmount] = useState(false)

  useEffect(() => {
    const fetchCreditPackage = async () => {
      const { data: package_data, error } = await supabase
        .from('credit_packages')
        .select('*')
        .single()

      if (!error && package_data) {
        setBasePrice(package_data.base_price)
        setCustomAmount(package_data.base_price)
        setCreditsPerPackage(package_data.credits_per_package)
      }
    }

    fetchCreditPackage()
  }, [])

  const handlePurchaseCredits = async () => {
    try {
      setIsLoading(true)
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        toast({
          title: "Authentication required",
          description: "Please sign in to purchase credits",
          variant: "destructive",
        })
        return
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { 
          amount: showCustomAmount ? customAmount : basePrice
        },
      })

      if (error) throw error

      if (data?.url) {
        window.location.href = data.url
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm mt-8 relative z-20">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <CreditBalance />
        
        <div className="space-y-4">
          <StandardPurchaseButton
            basePrice={basePrice}
            creditsPerPackage={creditsPerPackage}
            onPurchase={() => {
              setShowCustomAmount(false)
              handlePurchaseCredits()
            }}
            isLoading={isLoading}
          />

          <div className="text-center">
            <button
              onClick={() => setShowCustomAmount(!showCustomAmount)}
              className="text-sm text-emerald-600 hover:text-emerald-700 underline"
            >
              {showCustomAmount ? "Hide custom amount" : "Want to support us more?"}
            </button>

            {showCustomAmount && (
              <CustomAmountInput
                basePrice={basePrice}
                customAmount={customAmount}
                setCustomAmount={setCustomAmount}
                onPurchase={handlePurchaseCredits}
                isLoading={isLoading}
                creditsPerPackage={creditsPerPackage}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}