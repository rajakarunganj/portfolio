import { useCallback, useRef, useState } from 'react';

interface TiltState {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
}

const RESET: TiltState = { rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 };

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Pointer-relative 3D tilt + glare position for premium hover cards. Pure CSS transform, no deps. */
export function useTilt(maxDegrees = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltState>(RESET);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion() || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setTilt({
        rotateX: (0.5 - py) * maxDegrees * 2,
        rotateY: (px - 0.5) * maxDegrees * 2,
        glareX: px * 100,
        glareY: py * 100,
      });
    },
    [maxDegrees]
  );

  const onPointerLeave = useCallback(() => setTilt(RESET), []);

  return {
    ref,
    tilt,
    onPointerMove,
    onPointerLeave,
    style: {
      transform: `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      transition: 'transform 0.15s ease-out',
    } as React.CSSProperties,
    glareStyle: {
      background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, var(--spider-glow), transparent 60%)`,
    } as React.CSSProperties,
  };
}
