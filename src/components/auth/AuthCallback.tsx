import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Session error:', sessionError);
          toast({
            title: "Authentication Error",
            description: sessionError.message,
            variant: "destructive",
          });
          navigate('/');
          return;
        }

        if (!session) {
          console.log('No session found, redirecting to home...');
          navigate('/');
          return;
        }

        console.log('Session found:', session);
        
        // Check if user has credits (completed onboarding)
        const { data: userCredits, error: creditsError } = await supabase
          .from('user_credits')
          .select('*')
          .eq('user_id', session.user.id)
          .single();

        if (creditsError) {
          console.error('Error fetching user credits:', creditsError);
          toast({
            title: "Error",
            description: "Failed to fetch user credits",
            variant: "destructive",
          });
        }

        if (!userCredits) {
          console.log('No user credits found, redirecting to onboarding...');
          navigate('/onboarding');
        } else {
          console.log('User credits found, redirecting to dashboard...');
          navigate('/dashboard');
        }
      } catch (error: any) {
        console.error('Unexpected error:', error);
        toast({
          title: "Authentication Error",
          description: "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
        navigate('/');
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
    </div>
  );
};