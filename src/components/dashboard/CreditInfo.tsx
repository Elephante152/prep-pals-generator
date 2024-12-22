import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { Link } from 'react-router-dom'
import { CreditCard } from 'lucide-react'

export const CreditInfo = () => {
  const { toast } = useToast()
  const [credits, setCredits] = useState(0)
  const [basePrice, setBasePrice] = useState(2.99)
  const [creditsPerPackage, setCreditsPerPackage] = useState(10)

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

  return (
    <footer className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm mt-8 relative z-20">
      <div className="container mx-auto px-4 py-4 text-center text-gray-600">
        <p>Available Credits: {credits}</p>
        <Link to="/credits" className="text-emerald-600 hover:text-emerald-700 font-medium">
          Get {creditsPerPackage} generations for ${basePrice}
          <CreditCard className="inline w-4 h-4 ml-1" />
        </Link>
      </div>
    </footer>
  )
}