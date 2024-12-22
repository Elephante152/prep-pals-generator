import { useState, useEffect } from 'react'
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"

export const CreditBalance = () => {
  const { toast } = useToast()
  const [credits, setCredits] = useState(0)

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

    fetchUserCredits()
  }, [toast])

  return (
    <div className="mb-4">
      <p className="text-lg font-medium">Available Credits: {credits}</p>
      <p className="text-sm text-gray-500 mt-1">Each generation uses 1 credit</p>
    </div>
  )
}