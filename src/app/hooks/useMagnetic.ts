import { useCallback, useRef, useState } from 'react';

const MAX_PULL = 8;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Subtle magnetic pull toward the cursor, capped so it stays classy rather than gimmicky. */
export function useMagnetic() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({ x: px * MAX_PULL * 2, y: py * MAX_PULL * 2 });
  }, []);

  const onPointerLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  return {
    ref,
    onPointerMove,
    onPointerLeave,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: 'transform 0.2s ease-out',
    } as React.CSSProperties,
  };
}
