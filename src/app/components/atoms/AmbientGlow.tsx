import { memo } from 'react';

interface Orb {
  color: string;
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  duration: string;
  delay: string;
  opacity: number;
  blur: number;
}

// Kept subtle — CinematicLight now carries the primary red/blue key light,
// this layer just adds gold/accent texture drift underneath it.
const orbs: Orb[] = [
  { color: 'var(--gold)', size: '36vw', top: '30%', right: '-12%', duration: '32s', delay: '-8s', opacity: 0.09, blur: 100 },
  { color: 'var(--accent)', size: '40vw', bottom: '-18%', left: '15%', duration: '28s', delay: '-15s', opacity: 0.1, blur: 120 },
  { color: 'var(--primary)', size: '22vw', top: '48%', left: '42%', duration: '20s', delay: '-11s', opacity: 0.06, blur: 80 },
];

/**
 * Large, slow-drifting, heavily-blurred gradient orbs — the site's premium
 * atmospheric layer. Purely decorative, sits behind everything else.
 */
export const AmbientGlow = memo(function AmbientGlow() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-drift motion-reduce:animate-none"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            opacity: orb.opacity,
            filter: `blur(${orb.blur}px)`,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            animationDuration: orb.duration,
            animationDelay: orb.delay,
          }}
        />
      ))}
    </div>
  );
});
