import { CreditCard, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface StandardPurchaseButtonProps {
  basePrice: number
  creditsPerPackage: number
  onPurchase: () => void
  isLoading: boolean
}

export const StandardPurchaseButton = ({
  basePrice,
  creditsPerPackage,
  onPurchase,
  isLoading
}: StandardPurchaseButtonProps) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button 
        onClick={onPurchase}
        disabled={isLoading}
        className="bg-emerald-500 hover:bg-emerald-600 text-white"
      >
        <CreditCard className="w-4 h-4 mr-2" />
        Get {creditsPerPackage} generations for ${basePrice}
      </Button>
      
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info className="w-4 h-4 text-gray-400 hover:text-gray-600" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs">
            <p>This is our minimum price to cover compute costs and ensure quality service.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}