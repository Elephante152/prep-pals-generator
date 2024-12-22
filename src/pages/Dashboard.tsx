'use client'

import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { EmojiBackground } from '@/components/dashboard/EmojiBackground'
import { GenerateButton } from '@/components/dashboard/GenerateButton'
import { CreditInfo } from '@/components/dashboard/CreditInfo'
import { MealPlanCard } from '@/components/dashboard/MealPlanCard'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { AnimatedGradientText } from '@/components/AnimatedGradientText'
import { supabase } from "@/integrations/supabase/client"

const generateMealPlanTitle = (requirements: string) => {
  const keywords = requirements.toLowerCase().split(' ')
  const dietTypes = ['vegetarian', 'vegan', 'keto', 'paleo', 'mediterranean']
  const foundDiet = dietTypes.find(diet => keywords.includes(diet)) || 'Custom'
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  return `${foundDiet} Meal Plan (${timestamp})`
}

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  })
}

export default function Dashboard() {
  const { toast } = useToast()
  const [mealPlanText, setMealPlanText] = useState('')
  const [numMeals, setNumMeals] = useState(3)
  const [numDays, setNumDays] = useState(7)
  const [caloricTarget, setCaloricTarget] = useState(2000)
  const [generatedPlans, setGeneratedPlans] = useState([])
  const [credits, setCredits] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const fetchUserCredits = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        return
      }

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

  const handleGenerate = useCallback(async () => {
    if (credits <= 0) {
      toast({
        title: "No credits available",
        description: "Please purchase more credits to continue generating meal plans.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      return
    }

    try {
      const { error: creditError } = await supabase.rpc('update_user_credits', {
        p_user_id: session.user.id,
        p_amount: 1,
        p_type: 'spend',
        p_description: 'Generated meal plan'
      })

      if (creditError) throw creditError

      const { error: mealPlanError } = await supabase
        .from('meal_plans')
        .insert({
          user_id: session.user.id,
          credits_used: 1,
          dietary_restrictions: [],
          cuisine_preferences: [],
          meal_count: numMeals
        })

      if (mealPlanError) throw mealPlanError

      const title = generateMealPlanTitle(mealPlanText)
      const newPlan = {
        id: Date.now(),
        title,
        plan: `Generated meal plan based on your preferences and additional requirements: ${mealPlanText}\n\n[Your generated meal plan would appear here]`,
        isMinimized: false
      }
      
      setGeneratedPlans(prev => [...prev, newPlan])
      setCredits(prev => prev - 1)
      triggerConfetti()
      
    } catch (error) {
      toast({
        title: "Error generating meal plan",
        description: error instanceof Error ? error.message : "An error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }, [mealPlanText, credits, numMeals, toast])

  const toggleMinimize = (id) => {
    setGeneratedPlans(prev =>
      prev.map(plan =>
        plan.id === id ? { ...plan, isMinimized: !plan.isMinimized } : plan
      )
    )
  }

  const closePlan = (id) => {
    setGeneratedPlans(prev => prev.filter(plan => plan.id !== id))
  }

  const savePlan = (id) => {
    console.log('Saving plan:', id)
  }

  const regeneratePlan = (id) => {
    if (credits <= 0) {
      console.log('No credits available')
      return
    }
    
    console.log('Regenerating plan:', id)
    setCredits(prev => prev - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isLoading && credits > 0) {
      handleGenerate()
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative overflow-hidden">
      <EmojiBackground />
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-sm relative z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/">
            <AnimatedGradientText text="MealPrepGenie" className="text-2xl font-bold" />
          </Link>
          <button 
            onClick={() => setIsNavOpen(true)} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <Sheet open={isNavOpen} onOpenChange={setIsNavOpen}>
        <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white bg-opacity-90 backdrop-blur-md">
          <SheetHeader>
            <SheetTitle>
              <AnimatedGradientText text="Navigation" className="text-2xl font-semibold" />
            </SheetTitle>
          </SheetHeader>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <Link to="/dashboard" className="flex items-center text-lg text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="flex items-center text-lg text-gray-600 hover:text-gray-900">
                  Meal Plans
                </Link>
              </li>
              <li>
                <Link to="/profile" className="flex items-center text-lg text-gray-600 hover:text-gray-900">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/settings" className="flex items-center text-lg text-gray-600 hover:text-gray-900">
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      <main className="flex-grow flex items-center justify-center relative z-10">
        <motion.div
          className="bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-lg p-6 max-w-md w-full mx-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatedGradientText text="Generate Meal Plan" className="text-2xl font-semibold mb-4 text-center block" />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Textarea
                placeholder="Enter any specific requirements for your meal plan..."
                value={mealPlanText}
                onChange={(e) => setMealPlanText(e.target.value)}
                className="mt-2 h-20 resize-none bg-white bg-opacity-50 backdrop-blur-sm border-gray-200 focus:border-emerald-500 focus:ring focus:ring-emerald-200 transition duration-200"
              />
            </div>
            <div className="flex flex-col items-center space-y-4">
              <GenerateButton onClick={handleGenerate} isLoading={isLoading} />
            </div>
          </form>
        </motion.div>
      </main>

      <AnimatePresence>
        {generatedPlans.map((plan) => (
          <MealPlanCard
            key={plan.id}
            plan={plan}
            onToggleMinimize={toggleMinimize}
            onClose={closePlan}
            onSave={savePlan}
            onRegenerate={regeneratePlan}
            credits={credits}
          />
        ))}
      </AnimatePresence>

      <CreditInfo />
    </div>
  )
}
