import { memo } from 'react';

const NOISE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg">
  <filter id="n">
    <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
    <feColorMatrix type="saturate" values="0" />
  </filter>
  <rect width="100%" height="100%" filter="url(#n)" />
</svg>
`.trim();

const NOISE_URL = `url("data:image/svg+xml,${encodeURIComponent(NOISE_SVG)}")`;

/**
 * Fixed, full-viewport, very-low-opacity film-grain texture. Purely
 * decorative — gives the flat gradient layers a filmic, premium finish.
 */
export const GrainOverlay = memo(function GrainOverlay() {
  return (
    <div
      className="fixed inset-0 z-[2] pointer-events-none opacity-[0.035]"
      style={{ backgroundImage: NOISE_URL, mixBlendMode: 'overlay' }}
      aria-hidden="true"
    />
  );
});
