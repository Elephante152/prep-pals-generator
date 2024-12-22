import { Clock, Cookie, Shield, Sparkles, Utensils, Wand2 } from 'lucide-react';
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { BenefitCard } from '@/components/BenefitCard';

export const BenefitsSection = () => {
  return (
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
  );
};