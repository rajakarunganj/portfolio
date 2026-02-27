import React from 'react';
import { motion } from 'motion/react';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

export function ProfileImage({ src, alt = "Profile" }: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#059669] rounded-full blur-2xl opacity-30 animate-pulse" />
      
      {/* Image Container */}
      <motion.div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay on Hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-[#7C3AED]/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating Ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-[#2563EB]/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}