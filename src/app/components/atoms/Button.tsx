import React, { useCallback } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ButtonComponent = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-98",
    secondary: "bg-white text-[#2563EB] shadow-md hover:shadow-lg border border-gray-200 hover:scale-105 active:scale-98",
    outline: "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB]/5 hover:scale-105 active:scale-98"
  };
  
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg"
  };

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
