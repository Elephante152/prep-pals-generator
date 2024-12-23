import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';
import { SignUpFlow } from '@/components/SignUpFlow';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  onLogin: () => Promise<void>;
}

export const Header = ({ onLogin }: HeaderProps) => {
  const { toast } = useToast();

  const handleLogin = async () => {
    try {
      const redirectUrl = `${window.location.origin}/auth/callback`;
      console.log('Login - Current origin:', window.location.origin);
      console.log('Login - Full redirect URL:', redirectUrl);

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          skipBrowserRedirect: false
        },
      });

      if (error) {
        console.error('Login error:', error);
        console.error('Error details:', {
          message: error.message,
          status: error.status,
          name: error.name,
          redirectUrl,
          origin: window.location.origin,
          href: window.location.href
        });
        toast({
          title: "Login Error",
          description: "Unable to connect to Google. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data) {
        console.log('Login initiated successfully:', data);
      }
    } catch (error) {
      console.error('Unexpected error during login:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack,
          origin: window.location.origin,
          href: window.location.href
        });
      }
      toast({
        title: "Login Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
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