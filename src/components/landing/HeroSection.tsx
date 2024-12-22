import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { GenieAnimation } from '@/components/GenieAnimation';
import { SignUpFlow } from '@/components/SignUpFlow';

export const HeroSection = () => {
  return (
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
  );
};