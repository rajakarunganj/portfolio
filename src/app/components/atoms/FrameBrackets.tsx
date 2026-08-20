import { memo } from 'react';

/**
 * Fixed HUD viewfinder brackets in the four viewport corners — the
 * "camera frame" that reads as consistently present, unlike brackets
 * anchored to individual (much taller) sections which scroll out of sync
 * with the viewport.
 */
export const FrameBrackets = memo(function FrameBrackets() {
  const base = 'absolute w-6 h-6 sm:w-9 sm:h-9 border-primary/20';
  return (
    <div
      className="fixed z-40 pointer-events-none motion-reduce:hidden"
      style={{ inset: 'clamp(22px, 3.5vh, 34px) 14px' }}
      aria-hidden="true"
    >
      <span className={`${base} top-0 left-0 border-t border-l`} />
      <span className={`${base} top-0 right-0 border-t border-r`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </div>
  );
});
