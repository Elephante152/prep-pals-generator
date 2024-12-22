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
        // Get the current session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          toast({
            title: "Authentication Error",
            description: error.message,
            variant: "destructive",
          });
          navigate('/');
          return;
        }

        if (session) {
          console.log('Session found:', session);
          
          // Check if user has credits (completed onboarding)
          const { data: userCredits, error: creditsError } = await supabase
            .from('user_credits')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

          if (creditsError) {
            console.error('Error fetching user credits:', creditsError);
          }

          console.log('User credits:', userCredits);

          if (!userCredits) {
            console.log('Redirecting to onboarding...');
            navigate('/onboarding');
          } else {
            console.log('Redirecting to dashboard...');
            navigate('/dashboard');
          }
        } else {
          console.log('No session found, redirecting to home...');
          navigate('/');
        }
      } catch (error) {
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