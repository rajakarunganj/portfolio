import { memo } from 'react';

/**
 * Fixed radial vignette that frames the viewport for a cinematic finish.
 * Purely decorative, sits above the background layers, below content.
 */
export const Vignette = memo(function Vignette() {
  return (
    <div
      className="fixed inset-0 z-[3] pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at center, transparent 45%, var(--vignette) 100%)',
      }}
      aria-hidden="true"
    />
  );
});
