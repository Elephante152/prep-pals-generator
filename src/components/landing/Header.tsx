import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { SignUpFlow } from '@/components/SignUpFlow';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { useState } from 'react';

interface HeaderProps {
  onLogin: () => Promise<void>;
}

export const Header = ({ onLogin }: HeaderProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error('Login Error:', error);
        toast({
          title: "Login Error",
          description: error.message,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Unexpected Login Error:', error);
      toast({
        title: "Login Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
              onClick={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </Button>
            <SignUpFlow />
          </div>
        </nav>
      </div>
    </header>
  );
};