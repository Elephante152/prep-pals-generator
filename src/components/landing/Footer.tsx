import { Button } from "@/components/ui/button";
import { AnimatedGradientText } from '@/components/AnimatedGradientText';

export const Footer = () => {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <AnimatedGradientText text="MealPrepGenie" className="text-xl font-bold" />
            </div>
            <p className="text-gray-600 mt-4">
              Your personal AI meal planning assistant.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Features</Button></li>
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Pricing</Button></li>
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Demo</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">About</Button></li>
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Blog</Button></li>
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Careers</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Privacy</Button></li>
              <li><Button variant="link" className="text-gray-600 hover:text-gray-900">Terms</Button></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} MealPrepGenie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};