import  { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { LoadingScreen } from '../organisms/LoadingScreen';
import { PortfolioTemplate } from '../templates/PortfolioTemplate';

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      {!isLoading && <PortfolioTemplate />}
    </>
  );
}
