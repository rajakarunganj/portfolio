import { useRef } from 'react';
import { useScroll, useTransform, useSpring, type MotionValue } from 'motion/react';

/**
 * Drifts an element vertically as its containing section scrolls through the
 * viewport. `range` is how many pixels of drift to apply across the scroll
 * range; positive moves down, negative moves up (parallax "behind" content).
 */
export function useParallax<T extends HTMLElement>(range = 60) {
  const ref = useRef<T>(null);
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const effectiveRange = reduceMotion ? 0 : range;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [-effectiveRange, effectiveRange]);
  const y: MotionValue<number> = useSpring(raw, { stiffness: 80, damping: 20, mass: 0.3 });

  return { ref, y };
}
