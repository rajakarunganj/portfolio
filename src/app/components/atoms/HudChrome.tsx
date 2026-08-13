import { memo } from 'react';

interface StatusTickProps {
  label: string;
  className?: string;
}

/** Small HUD status readout: pulsing dot + uppercase label. */
export const StatusTick = memo(function StatusTick({ label, className = '' }: StatusTickProps) {
  return (
    <div className={`flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-hud-text ${className}`}>
      <span className="relative flex w-1.5 h-1.5">
        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-glow motion-reduce:hidden" />
        <span className="relative w-1.5 h-1.5 rounded-full bg-primary" />
      </span>
      {label}
    </div>
  );
});

/** Diagonal animated sweep used to frame section headers / featured cards. */
export const ScanSweep = memo(function ScanSweep({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-primary/[0.07] to-transparent animate-scan-line" />
    </div>
  );
});
