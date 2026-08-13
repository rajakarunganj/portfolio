import { memo } from 'react';
import { motion } from 'motion/react';

interface HudLabelProps {
  index?: string;
  children: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const HudLabel = memo(function HudLabel({
  index,
  children,
  align = 'left',
  className = '',
}: HudLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-primary font-display font-medium ${
        align === 'center' ? 'justify-center' : 'justify-start'
      } ${className}`}
    >
      <span className="inline-block w-6 h-px bg-primary/70" aria-hidden="true" />
      {index && <span className="text-hud-text">{index}</span>}
      <span>{children}</span>
    </motion.div>
  );
});
