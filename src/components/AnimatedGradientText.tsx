import { motion } from 'framer-motion';

export const AnimatedGradientText = ({ text, className = '' }: { text: string, className?: string }) => {
  return (
    <motion.span
      className={`bg-clip-text text-transparent ${className}`}
      animate={{
        backgroundImage: [
          'linear-gradient(to right, #10B981, #FBBF24, #E36414)',
          'linear-gradient(to right, #E36414, #10B981, #FBBF24)',
          'linear-gradient(to right, #FBBF24, #E36414, #10B981)',
        ],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.span>
  );
};