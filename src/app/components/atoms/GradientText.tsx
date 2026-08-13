import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue-violet' | 'emerald-teal' | 'rainbow';
}

const GradientTextComponent = ({ children, className = '', variant = 'blue-violet' }: GradientTextProps) => {
  const gradients = {
    'blue-violet': 'bg-gradient-to-r from-primary to-primary-dark',
    'emerald-teal': 'bg-gradient-to-r from-accent to-primary',
    'rainbow': 'bg-gradient-to-r from-primary via-gold to-accent'
  };

  return (
    <span className={`${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

export const GradientText = React.memo(GradientTextComponent);
