import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';

export const GenieAnimation = () => {
  return (
    <div className="relative w-24 h-24 mx-auto mb-8">
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-500"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute inset-2 rounded-full bg-white flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Wand2 className="w-8 h-8 text-emerald-500" />
      </motion.div>
    </div>
  );
};