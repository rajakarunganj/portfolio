import { memo } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle = memo(function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={`relative flex items-center w-14 h-8 rounded-full border border-border bg-secondary/80 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-ring ${className}`}
    >
      <motion.span
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary shadow-md flex items-center justify-center text-primary-foreground"
        animate={{ x: isDark ? 0 : 24 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
      </motion.span>
    </button>
  );
});
