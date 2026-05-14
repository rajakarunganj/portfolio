import React from 'react';
import { motion } from 'motion/react';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

const ProfileImageComponent = ({ src, alt = "Profile" }: ProfileImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative"
    >
      {/* Glow Effect - Static */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#059669] rounded-full blur-2xl opacity-20" />
      
      {/* Image Container */}
      <div
        className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/0 to-[#7C3AED]/0 hover:from-[#2563EB]/20 hover:to-[#7C3AED]/20 transition-all duration-300" />
      </div>

      {/* Floating Ring - Removed infinite animation for better performance */}
      <div
        className="absolute inset-0 rounded-full border-2 border-[#2563EB]/20"
      />
    </motion.div>
  );
};

export const ProfileImage = React.memo(ProfileImageComponent);