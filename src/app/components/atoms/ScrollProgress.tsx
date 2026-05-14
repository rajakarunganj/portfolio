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
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#059669] z-50 transition-all duration-200"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export const ScrollProgress = React.memo(ScrollProgressComponent);
