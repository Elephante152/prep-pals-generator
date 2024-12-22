import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Utensils } from 'lucide-react';

interface DietTypeSectionProps {
  dietType: string;
  setDietType: (value: string) => void;
  dietTypes: string[];
}

export const DietTypeSection = ({ dietType, setDietType, dietTypes }: DietTypeSectionProps) => {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold flex items-center">
        <Utensils className="w-5 h-5 mr-2" />
        Diet Type
      </Label>
      <RadioGroup value={dietType} onValueChange={setDietType} className="grid grid-cols-2 gap-2">
        {dietTypes.map(diet => (
          <div key={diet} className="relative">
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
  );
};