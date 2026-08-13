import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { PortfolioTemplate } from '../templates/PortfolioTemplate';
import { LoadingScreen } from '../organisms/LoadingScreen';

const MIN_DISPLAY_MS = 900;

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [minElapsed, setMinElapsed] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(document.readyState === 'complete');

  useEffect(() => {
    const minTimer = window.setTimeout(() => setMinElapsed(true), MIN_DISPLAY_MS);
    if (!pageLoaded) {
      window.addEventListener('load', () => setPageLoaded(true), { once: true });
    }
    return () => window.clearTimeout(minTimer);
  }, [pageLoaded]);

  useEffect(() => {
    if (minElapsed && pageLoaded) setIsLoading(false);
  }, [minElapsed, pageLoaded]);

  return (
    <>
      <PortfolioTemplate />
      <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>
    </>
  );
}
