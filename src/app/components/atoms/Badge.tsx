import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'emerald' | 'violet' | 'coral' | 'gold';
  className?: string;
}

const BadgeComponent = ({ children, color = 'blue', className = '' }: BadgeProps) => {
  const colors = {
    blue: 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-400/10 dark:text-slate-300 dark:border-slate-400/20',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20',
    violet: 'bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-400/10 dark:text-violet-300 dark:border-violet-400/20',
    coral: 'bg-primary/5 text-primary border-primary/15 dark:bg-primary/10 dark:text-red-300 dark:border-primary/25',
    gold: 'bg-amber-50 text-amber-700 border-amber-100 dark:bg-gold/10 dark:text-amber-300 dark:border-gold/25'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

export const Badge = React.memo(BadgeComponent);
