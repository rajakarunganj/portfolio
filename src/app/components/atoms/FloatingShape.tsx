import React from 'react';

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

const FloatingShapeComponent = ({ 
  color, 
  size, 
  top, 
  left, 
  right, 
  bottom
}: FloatingShapeProps) => {
  const position: React.CSSProperties = {
    top,
    left,
    right,
    bottom,
  };

  // Static gradient shapes for better performance - no animation
  return (
    <div
      className="absolute rounded-full opacity-20 blur-3xl pointer-events-none"
      style={{
        ...position,
        width: size,
        height: size,
        background: color,
      }}
    />
  );
};

export const FloatingShape = React.memo(FloatingShapeComponent);
