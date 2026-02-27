import { motion } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#F8F9FB] to-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={onComplete}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#059669]/20 to-[#06B6D4]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
       {/* Logo Animation */}
<motion.div
  initial={{ scale: 0, rotate: -180 }}
  animate={{ scale: 1, rotate: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="mb-8 mt-16 flex justify-center"  
>
  <img
    src="/images/Rajakarungan1.png"   
    alt="Logo"
      className="w-40 h-40 rounded-full object-cover shadow-2xl border-4 border-violet-500"
  />
</motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Rajakarungan J
          </h2>
          <p className="text-gray-600">Fullstack Developer</p>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          className="mt-12 w-64 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#059669]"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Percentage Counter */}
        <motion.div
          className="mt-4 text-sm font-medium text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, delay: 1, times: [0, 0.1, 0.9, 1] }}
          >
            Loading...
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
