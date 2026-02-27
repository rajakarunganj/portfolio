import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#2563EB] shadow-md hover:shadow-lg border border-gray-200",
    outline: "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5"
  };
  
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
