import React from 'react';
import { motion } from 'motion/react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
  delay?: number;
}

const TimelineItemComponent = ({
  year,
  title,
  company,
  description,
  color,
  delay = 0,
}: TimelineItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Dot */}
      <div
        className="absolute left-[-7px] top-1 w-4 h-4 rounded-full border-2 border-card shadow-lg hover:scale-[1.3] transition-transform duration-300"
        style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}
      />

      {/* Content */}
      <div className="bg-card rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            {year}
          </span>
        </div>

        <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-primary font-medium mb-3">{company}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const TimelineItem = React.memo(TimelineItemComponent);
