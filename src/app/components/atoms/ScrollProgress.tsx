import React, { useEffect, useState } from 'react';

const ScrollProgressComponent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-50 transition-all duration-200"
      style={{
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, var(--primary), var(--gold))',
        boxShadow: '0 0 12px var(--spider-glow)',
      }}
    />
  );
};

export const ScrollProgress = React.memo(ScrollProgressComponent);
