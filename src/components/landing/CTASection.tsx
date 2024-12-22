import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { SignUpFlow } from '@/components/SignUpFlow';

export const CTASection = () => {
  return (
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
  );
};