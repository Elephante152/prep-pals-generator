import { Button } from "@/components/ui/button"

interface CustomAmountInputProps {
  basePrice: number
  customAmount: number
  setCustomAmount: (amount: number) => void
  onPurchase: () => void
  isLoading: boolean
  creditsPerPackage: number
}

export const CustomAmountInput = ({
  basePrice,
  customAmount,
  setCustomAmount,
  onPurchase,
  isLoading,
  creditsPerPackage
}: CustomAmountInputProps) => {
  return (
    <div className="mt-4 space-y-3">
      <p className="text-sm text-gray-600">
        If our service has saved you valuable time, you can choose to pay more for the same {creditsPerPackage} generations.
      </p>
      <div className="flex items-center justify-center space-x-2">
        <input
          type="number"
          min={basePrice}
          step="0.01"
          value={customAmount}
          onChange={(e) => setCustomAmount(Number(e.target.value))}
          className="w-24 px-2 py-1 border rounded text-center"
        />
        <Button 
          onClick={onPurchase}
          disabled={isLoading || customAmount < basePrice}
          className="bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          Support with ${customAmount}
        </Button>
      </div>
      {customAmount > basePrice && (
        <p className="text-sm text-emerald-600">
          Thank you for your generous support! 🙏
        </p>
      )}
    </div>
  )
}