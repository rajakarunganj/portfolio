import { MotionConfig } from 'motion/react';
import { HomePage } from './components/pages/HomePage';
import { ThemeProvider } from './providers/ThemeProvider';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </MotionConfig>
  );
}
