import React from 'react';
import { motion } from 'motion/react';

interface ProfileImageProps {
  src: string;
  alt?: string;
}

const ProfileImageComponent = ({ src, alt = "Profile" }: ProfileImageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative w-fit mx-auto"
    >
      {/* Layered Glow */}
      <div className="absolute -inset-6 bg-gradient-to-br from-primary via-primary-dark to-accent rounded-full blur-3xl opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gold via-transparent to-primary rounded-full blur-2xl opacity-20" />

      {/* Slow-rotating rings */}
      <div
        className="absolute -inset-4 sm:-inset-5 rounded-full border border-dashed border-primary/35 animate-spin motion-reduce:hidden"
        style={{ animationDuration: '24s' }}
        aria-hidden="true"
      />
      <div
        className="absolute -inset-7 sm:-inset-9 rounded-full border border-dotted border-gold/25 animate-spin motion-reduce:hidden"
        style={{ animationDuration: '38s', animationDirection: 'reverse' }}
        aria-hidden="true"
      />

      {/* Image Container */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-2xl hover:scale-105 transition-transform duration-300 group">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300" />
      </div>

      <div className="absolute inset-0 rounded-full border-2 border-primary/25" />
    </motion.div>
  );
};

export const ProfileImage = React.memo(ProfileImageComponent);
