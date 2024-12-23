import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimatedGradientText } from './AnimatedGradientText';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

export const SignUpFlow = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { origin, protocol, host } = window.location;
      const redirectUrl = `${origin}/auth/callback`;
      
      console.log('OAuth Debug Info:', {
        origin,
        protocol,
        host,
        redirectUrl,
        currentUrl: window.location.href
      });

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });

      if (error) {
        console.error('Google Sign In Error:', {
          message: error.message,
          status: error.status,
          name: error.name,
          redirectUrl,
          origin,
          href: window.location.href
        });
        toast({
          title: "Authentication Error",
          description: "Unable to connect to Google. Please try again.",
          variant: "destructive",
        });
        return;
      }

      if (data) {
        console.log('Sign in initiated successfully:', data);
      }
    } catch (error) {
      console.error('Unexpected Error:', error);
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
        title: "Authentication Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-emerald-500 text-white hover:bg-emerald-600">
          Get Started <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            <AnimatedGradientText text="Start Your Journey" className="text-2xl font-bold" />
          </DialogTitle>
          <DialogDescription>
            Join MealPrepGenie today and transform your meal planning experience.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-4">
          <Button 
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
          >
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
            {isLoading ? 'Connecting to Google...' : 'Continue with Google'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};