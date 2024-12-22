import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut } from 'lucide-react';

export const Header = () => {
  const { signOut } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <AnimatedGradientText text="MealPrepGenie" className="text-2xl font-bold" />
          <Button 
            variant="ghost" 
            onClick={signOut}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </div>
    </header>
  );
};