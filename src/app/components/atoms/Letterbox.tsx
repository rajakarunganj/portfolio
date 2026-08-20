import { memo } from 'react';

/**
 * Fixed cinematic edge fade (top + bottom) with a tiny rec-dot — a light
 * touch of movie framing without eating vertical space or competing with
 * content. Hidden on short viewports so it never crowds the page.
 */
export const Letterbox = memo(function Letterbox() {
  return (
    <div
      className="fixed inset-x-0 top-0 z-40 pointer-events-none [@media(max-height:560px)]:hidden"
      style={{
        height: 'clamp(16px, 2.2vh, 22px)',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
      }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 h-full pl-3 sm:pl-5">
        <span className="relative flex w-1 h-1">
          <span className="absolute inset-0 rounded-full bg-primary animate-pulse-glow motion-reduce:hidden" />
          <span className="relative w-1 h-1 rounded-full bg-primary" />
        </span>
        <span className="text-[8px] tracking-[0.3em] text-white/35 uppercase font-display">
          Rec
        </span>
      </div>
    </div>
  );
});

/** Bottom edge fade — kept as a sibling fixed element for simplicity. */
export const LetterboxBottom = memo(function LetterboxBottom() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 pointer-events-none [@media(max-height:560px)]:hidden"
      style={{
        height: 'clamp(16px, 2.2vh, 22px)',
        background: 'linear-gradient(to top, rgba(0,0,0,0.35), transparent)',
      }}
      aria-hidden="true"
    />
  );
});
