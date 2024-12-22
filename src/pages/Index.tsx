import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl font-bold text-[#7C9082]">
            MealPrepGenie
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Your AI-powered meal prep assistant. Generate personalized meal plans, 
            save time, and eat healthier with smart recipe suggestions.
          </p>
          <div className="flex gap-4">
            <Button 
              className="bg-[#7C9082] hover:bg-[#6A7A6E] text-white"
              size="lg"
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#E07A5F] text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-[#7C9082] mb-4">
              AI-Powered Suggestions
            </h3>
            <p className="text-gray-600">
              Get personalized meal suggestions based on your preferences and dietary requirements.
            </p>
          </Card>
          
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-[#7C9082] mb-4">
              Time-Saving Plans
            </h3>
            <p className="text-gray-600">
              Save hours of meal planning with our intelligent recipe generator.
            </p>
          </Card>
          
          <Card className="p-6 bg-white shadow-lg">
            <h3 className="text-xl font-semibold text-[#7C9082] mb-4">
              Easy Organization
            </h3>
            <p className="text-gray-600">
              Keep all your favorite recipes organized and accessible in one place.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;