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
  bottom,
  delay = 0,
  duration = 6,
}: FloatingShapeProps) => {
  const position: React.CSSProperties = {
    top,
    left,
    right,
    bottom,
  };

  return (
    <div
      className="absolute rounded-full opacity-20 blur-3xl pointer-events-none animate-float motion-reduce:animate-none"
      style={{
        ...position,
        width: size,
        height: size,
        background: color,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  );
};

export const FloatingShape = React.memo(FloatingShapeComponent);
