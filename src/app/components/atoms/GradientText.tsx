import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'blue-violet' | 'emerald-teal' | 'rainbow';
}

export function GradientText({ children, className = '', variant = 'blue-violet' }: GradientTextProps) {
  const gradients = {
    'blue-violet': 'bg-gradient-to-r from-[#2563EB] to-[#7C3AED]',
    'emerald-teal': 'bg-gradient-to-r from-[#059669] to-[#06B6D4]',
    'rainbow': 'bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#059669]'
  };

  return (
    <span className={`${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}
