import { memo } from 'react';

/**
 * Fixed, full-viewport dual-tone key light — a soft red glow anchored
 * upper-left and a cool blue/accent glow lower-right, slowly breathing.
 * This is the primary "movie lighting" atmosphere layer; sits behind
 * everything else.
 */
export const CinematicLight = memo(function CinematicLight() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute -top-[20%] -left-[15%] w-[70vw] h-[70vw] rounded-full animate-breathe motion-reduce:animate-none"
        style={{
          background: 'radial-gradient(circle, var(--primary) 0%, transparent 65%)',
          opacity: 0.22,
          filter: 'blur(90px)',
          animationDuration: '14s',
        }}
      />
      <div
        className="absolute -bottom-[25%] -right-[15%] w-[65vw] h-[65vw] rounded-full animate-breathe motion-reduce:animate-none"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 65%)',
          opacity: 0.24,
          filter: 'blur(100px)',
          animationDuration: '18s',
          animationDelay: '-6s',
        }}
      />
      <div
        className="absolute top-[35%] left-[45%] w-[30vw] h-[30vw] rounded-full animate-breathe motion-reduce:animate-none"
        style={{
          background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)',
          opacity: 0.08,
          filter: 'blur(80px)',
          animationDuration: '22s',
          animationDelay: '-11s',
        }}
      />
    </div>
  );
});
