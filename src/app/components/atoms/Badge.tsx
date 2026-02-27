import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'emerald' | 'violet' | 'coral' | 'gold';
  className?: string;
}

export function Badge({ children, color = 'blue', className = '' }: BadgeProps) {
  const colors = {
    blue: 'bg-blue-50 text-[#2563EB] border-blue-100',
    emerald: 'bg-emerald-50 text-[#059669] border-emerald-100',
    violet: 'bg-violet-50 text-[#7C3AED] border-violet-100',
    coral: 'bg-red-50 text-[#FF6B6B] border-red-100',
    gold: 'bg-amber-50 text-[#C6A75E] border-amber-100'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
