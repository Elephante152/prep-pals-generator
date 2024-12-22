import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const BenefitCard = ({ icon, title, description, delay = 0 }: BenefitCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white bg-opacity-50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="rounded-full w-12 h-12 bg-emerald-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};