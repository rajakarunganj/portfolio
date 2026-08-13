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
  const baseStyles = "rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2";

  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground shadow-lg hover:shadow-glow hover:scale-105 hover:brightness-110 active:scale-98",
    secondary: "bg-card text-primary shadow-md hover:shadow-lg hover:border-primary/40 border border-border hover:scale-105 active:scale-98",
    outline: "border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 active:scale-98"
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
