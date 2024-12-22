import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wand2, Utensils, AlertTriangle, Globe, Activity, BarChart, Coffee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedGradientText } from './AnimatedGradientText';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const dietTypes = ['Omnivore', 'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 'Paleo'];
const activityLevels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extremely Active'];
const cuisines = ['Italian', 'Mexican', 'Japanese', 'Indian', 'American', 'French', 'Thai', 'Mediterranean'];
const cookingTools = ['Stove top', 'Oven', 'Microwave', 'Slow cooker', 'Pressure cooker', 'Air fryer', 'Grill', 'Blender'];

export const OnboardingSuccess = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [dietType, setDietType] = useState('Omnivore');
  const [allergies, setAllergies] = useState('');
  const [favoriteCuisines, setFavoriteCuisines] = useState<string[]>([]);
  const [activityLevel, setActivityLevel] = useState('Moderately Active');
  const [calorieIntake, setCalorieIntake] = useState(2000);
  const [mealsPerDay, setMealsPerDay] = useState(3);
  const [preferredCookingTools, setPreferredCookingTools] = useState<string[]>([]);

  const handleCuisineToggle = (cuisine: string) => {
    setFavoriteCuisines(prev =>
      prev.includes(cuisine)
        ? prev.filter(c => c !== cuisine)
        : [...prev, cuisine]
    );
  };

  const handleCookingToolToggle = (tool: string) => {
    setPreferredCookingTools(prev =>
      prev.includes(tool)
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send this data to your backend
      console.log({
        dietType,
        allergies,
        favoriteCuisines,
        activityLevel,
        calorieIntake,
        mealsPerDay,
        preferredCookingTools
      });
      
      toast({
        title: "Success!",
        description: "Your preferences have been saved.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl shadow-xl p-8 max-w-3xl w-full"
      >
        <AnimatedGradientText text="Welcome to MealPrepGenie!" className="text-3xl font-bold mb-6 text-center block" />
        <p className="text-gray-600 text-center mb-8">Let's personalize your experience by setting up your preferences.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <Label className="text-lg font-semibold flex items-center">
              <Utensils className="w-5 h-5 mr-2" />
              Diet Type
            </Label>
            <RadioGroup value={dietType} onValueChange={setDietType} className="grid grid-cols-2 gap-2">
              {dietTypes.map(diet => (
                <div key={diet}>
                  <RadioGroupItem value={diet} id={diet} className="peer sr-only" />
                  <Label
                    htmlFor={diet}
                    className="flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-md cursor-pointer transition-colors peer-checked:bg-emerald-100 peer-checked:border-emerald-500 hover:bg-gray-50"
                  >
                    {diet}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="allergies" className="text-lg font-semibold flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Allergies
            </Label>
            <Textarea
              id="allergies"
              placeholder="Enter any allergies or intolerances..."
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-lg font-semibold flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Favorite Cuisines
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cuisines.map(cuisine => (
                <div key={cuisine} className="flex items-center space-x-2">
                  <Switch
                    id={cuisine}
                    checked={favoriteCuisines.includes(cuisine)}
                    onCheckedChange={() => handleCuisineToggle(cuisine)}
                  />
                  <Label htmlFor={cuisine}>{cuisine}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-semibold flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Activity Level
            </Label>
            <RadioGroup value={activityLevel} onValueChange={setActivityLevel} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {activityLevels.map(level => (
                <div key={level}>
                  <RadioGroupItem value={level} id={level} className="peer sr-only" />
                  <Label
                    htmlFor={level}
                    className="flex items-center justify-center px-4 py-2 bg-white border border-gray-200 rounded-md cursor-pointer transition-colors peer-checked:bg-emerald-100 peer-checked:border-emerald-500 hover:bg-gray-50"
                  >
                    {level}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="calorieIntake" className="text-lg font-semibold flex items-center">
              <BarChart className="w-5 h-5 mr-2" />
              Daily Calorie Intake
            </Label>
            <div className="flex items-center space-x-4">
              <Slider
                id="calorieIntake"
                min={1000}
                max={4000}
                step={50}
                value={[calorieIntake]}
                onValueChange={(value) => setCalorieIntake(value[0])}
                className="flex-grow"
              />
              <span className="text-gray-700 font-medium">{calorieIntake} cal</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mealsPerDay" className="text-lg font-semibold">Meals per Day</Label>
            <Input
              type="number"
              id="mealsPerDay"
              min={1}
              max={6}
              value={mealsPerDay}
              onChange={(e) => setMealsPerDay(parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-lg font-semibold flex items-center">
              <Coffee className="w-5 h-5 mr-2" />
              Preferred Cooking Tools
            </Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {cookingTools.map(tool => (
                <div key={tool} className="flex items-center space-x-2">
                  <Switch
                    id={tool}
                    checked={preferredCookingTools.includes(tool)}
                    onCheckedChange={() => handleCookingToolToggle(tool)}
                  />
                  <Label htmlFor={tool}>{tool}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center pt-6">
            <Button type="submit" className="bg-emerald-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors">
              <Wand2 className="w-5 h-5 mr-2" />
              Create My Personalized Experience
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Button 
            variant="link" 
            className="text-emerald-600 hover:text-emerald-700 font-medium"
            onClick={handleSkip}
          >
            Skip for now and go to Dashboard
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
