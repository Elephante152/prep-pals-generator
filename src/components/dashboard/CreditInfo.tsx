import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { CreditCard, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const CreditInfo = () => {
  const { toast } = useToast()
  const [credits, setCredits] = useState(0)
  const [basePrice, setBasePrice] = useState(2.99)
  const [customAmount, setCustomAmount] = useState(basePrice)
  const [creditsPerPackage, setCreditsPerPackage] = useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [showCustomAmount, setShowCustomAmount] = useState(false)

  useEffect(() => {
    const fetchUserCredits = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data: userCredits, error } = await supabase
        .from('user_credits')
        .select('balance')
        .eq('user_id', session.user.id)
        .single()

      if (error) {
        toast({
          title: "Error fetching credits",
          description: error.message,
          variant: "destructive",
        })
        return
      }

      if (userCredits) {
        setCredits(userCredits.balance)
      }
    }

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

    fetchUserCredits()
    fetchCreditPackage()
  }, [toast])

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
        <div className="mb-4">
          <p className="text-lg font-medium">Available Credits: {credits}</p>
          <p className="text-sm text-gray-500 mt-1">Each generation uses 1 credit</p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <Button 
              onClick={() => {
                setShowCustomAmount(false)
                handlePurchaseCredits()
              }}
              disabled={isLoading}
              className="bg-emerald-500 hover:bg-emerald-600 text-white"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Get {creditsPerPackage} generations for ${basePrice}
            </Button>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p>This is our minimum price to cover compute costs and ensure quality service.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="text-center">
            <button
              onClick={() => setShowCustomAmount(!showCustomAmount)}
              className="text-sm text-emerald-600 hover:text-emerald-700 underline"
            >
              {showCustomAmount ? "Hide custom amount" : "Want to support us more?"}
            </button>

            {showCustomAmount && (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-gray-600">
                  If our service has saved you valuable time, you can choose to pay more for the same {creditsPerPackage} generations.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <input
                    type="number"
                    min={basePrice}
                    step="0.01"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(Number(e.target.value))}
                    className="w-24 px-2 py-1 border rounded text-center"
                  />
                  <Button 
                    onClick={handlePurchaseCredits}
                    disabled={isLoading || customAmount < basePrice}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    Support with ${customAmount}
                  </Button>
                </div>
                {customAmount > basePrice && (
                  <p className="text-sm text-emerald-600">
                    Thank you for your generous support! 🙏
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}