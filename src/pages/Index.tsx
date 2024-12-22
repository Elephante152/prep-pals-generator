import { ChevronRight, Clock, Cookie, Shield, Sparkles, Utensils, Wand2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { GenieAnimation } from '@/components/GenieAnimation';
import { BenefitCard } from '@/components/BenefitCard';
import { StepCard } from '@/components/StepCard';
import { SignUpFlow } from '@/components/SignUpFlow';
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });

    if (error) {
      toast({
        title: "Login Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">

          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <AnimatedGradientText text="MealPrepGenie" className="text-2xl font-bold" />
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-gray-600 hover:text-gray-900"
                onClick={handleLogin}
              >
                Login
              </Button>
              <SignUpFlow />
            </div>
          </nav>

        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <GenieAnimation />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Your Personal
                <AnimatedGradientText text=" AI Meal Planning " className="inline-block" />
                Assistant
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your meal planning experience with personalized recipes, smart grocery lists, and AI-powered recommendations.
              </p>
              <div className="flex justify-center space-x-4">
                <SignUpFlow />
                <Button variant="outline">
                  Watch Demo <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose <AnimatedGradientText text="MealPrepGenie" />?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitCard
                icon={<Sparkles className="w-6 h-6 text-emerald-500" />}
                title="AI-Powered Recommendations"
                description="Get personalized meal suggestions based on your preferences, dietary restrictions, and goals."
                delay={0.1}
              />
              <BenefitCard
                icon={<Clock className="w-6 h-6 text-emerald-500" />}
                title="Save Time"
                description="Streamline your meal planning process and spend less time wondering what to cook."
                delay={0.2}
              />
              <BenefitCard
                icon={<Cookie className="w-6 h-6 text-emerald-500" />}
                title="Diverse Recipes"
                description="Access a vast collection of recipes from various cuisines and dietary preferences."
                delay={0.3}
              />
              <BenefitCard
                icon={<Shield className="w-6 h-6 text-emerald-500" />}
                title="Dietary Restrictions"
                description="Easily filter recipes based on allergies, intolerances, and dietary preferences."
                delay={0.4}
              />
              <BenefitCard
                icon={<Utensils className="w-6 h-6 text-emerald-500" />}
                title="Smart Meal Plans"
                description="Generate balanced meal plans that fit your schedule and nutritional needs."
                delay={0.5}
              />
              <BenefitCard
                icon={<Wand2 className="w-6 h-6 text-emerald-500" />}
                title="Magic Customization"
                description="Tweak and adjust your meal plans with a simple click of a button."
                delay={0.6}
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How <AnimatedGradientText text="MealPrepGenie" /> Works
            </h2>
            <div className="max-w-2xl mx-auto space-y-8">
              <StepCard
                number={1}
                title="Set Your Preferences"
                description="Tell us about your dietary preferences, restrictions, and goals."
                delay={0.1}
              />
              <StepCard
                number={2}
                title="Get Personalized Plans"
                description="Receive AI-generated meal plans tailored to your needs."
                delay={0.2}
              />
              <StepCard
                number={3}
                title="Shop & Prepare"
                description="Use our smart grocery lists and cooking instructions to prepare your meals."
                delay={0.3}
              />
              <StepCard
                number={4}
                title="Enjoy & Adjust"
                description="Rate your meals and get even better recommendations over time."
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your
              <AnimatedGradientText text=" Meal Planning" className="inline-block" />?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of happy users who have simplified their meal planning with MealPrepGenie.
            </p>
            <SignUpFlow />
          </div>
        </section>
      </main>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <AnimatedGradientText text="MealPrepGenie" className="text-xl font-bold" />
              </div>
              <p className="text-gray-600 mt-4">
                Your personal AI meal planning assistant.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Features</Button></li>
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Pricing</Button></li>
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Demo</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">About</Button></li>
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Blog</Button></li>
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Careers</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Privacy</Button></li>
                <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Terms</Button></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} MealPrepGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
