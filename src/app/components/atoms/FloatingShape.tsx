import React from 'react';
import { motion } from 'motion/react';

interface FloatingShapeProps {
  color: string;
  size: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: number;
  duration?: number;
}

export function FloatingShape({ 
  color, 
  size, 
  top, 
  left, 
  right, 
  bottom, 
  delay = 0,
  duration = 20 
}: FloatingShapeProps) {
  const position: React.CSSProperties = {
    top,
    left,
    right,
    bottom,
  };

  return (
    <motion.div
      className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
      style={{
        ...position,
        width: size,
        height: size,
        background: color,
      }}
      animate={{
        x: [0, 30, 0, -30, 0],
        y: [0, -40, 0, 40, 0],
        scale: [1, 1.1, 1, 0.9, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}
