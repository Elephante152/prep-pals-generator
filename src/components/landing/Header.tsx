import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { SignUpFlow } from '@/components/SignUpFlow';

interface HeaderProps {
  onLogin: () => Promise<void>;
}

export const Header = ({ onLogin }: HeaderProps) => {
  return (
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
              onClick={onLogin}
            >
              Login
            </Button>
            <SignUpFlow />
          </div>
        </nav>
      </div>
    </header>
  );
};