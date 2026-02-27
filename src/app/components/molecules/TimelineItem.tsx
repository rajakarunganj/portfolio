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

export function TimelineItem({ 
  year, 
  title, 
  company, 
  description, 
  color,
  delay = 0 
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 to-transparent" />
      
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-[-7px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-lg"
        style={{ backgroundColor: color }}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />

      {/* Content */}
      <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: color }}
          >
            {year}
          </span>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
        <p className="text-[#2563EB] font-medium mb-3">{company}</p>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
