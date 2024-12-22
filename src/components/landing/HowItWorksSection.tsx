import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { StepCard } from '@/components/StepCard';

export const HowItWorksSection = () => {
  return (
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
  );
};