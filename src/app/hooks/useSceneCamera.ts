import { useRef } from 'react';
import { useScroll, useTransform, useSpring, type MotionValue } from 'motion/react';

interface SceneCamera {
  ref: React.RefObject<HTMLElement | null>;
  scale: MotionValue<number>;
  blur: MotionValue<string>;
  rotateX: MotionValue<number>;
}

/**
 * Drives a subtle scroll-based "camera push-in": a section scales up and
 * sharpens as it settles into the center of the viewport, and eases back
 * (with a faint rotateX tilt) as it enters/exits — simulating a camera
 * dollying through a stack of depth layers, without any WebGL.
 */
export function useSceneCamera<T extends HTMLElement>(): SceneCamera {
  const ref = useRef<T>(null);
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const scale = useTransform(progress, [0, 0.5, 1], reduceMotion ? [1, 1, 1] : [0.94, 1, 0.97]);

  const blur = useTransform(
    progress,
    [0, 0.18, 0.5, 0.85, 1],
    reduceMotion
      ? ['blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(0px)']
      : ['blur(6px)', 'blur(0px)', 'blur(0px)', 'blur(0px)', 'blur(3px)']
  );

  const rotateX = useTransform(progress, [0, 0.5, 1], reduceMotion ? [0, 0, 0] : [4, 0, -3]);

  return { ref, scale, blur, rotateX };
}
