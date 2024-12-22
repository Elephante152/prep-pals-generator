import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { Link } from 'react-router-dom'
import { CreditCard } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const CreditInfo = () => {
  const { toast } = useToast()
  const [credits, setCredits] = useState(0)
  const [basePrice, setBasePrice] = useState(2.99)
  const [creditsPerPackage, setCreditsPerPackage] = useState(10)
  const [isLoading, setIsLoading] = useState(false)

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
        body: { },
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
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        <p className="mb-2">Available Credits: {credits}</p>
        <Button 
          onClick={handlePurchaseCredits} 
          disabled={isLoading}
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Get {creditsPerPackage} generations for ${basePrice}
        </Button>
      </div>
    </footer>
  )
}