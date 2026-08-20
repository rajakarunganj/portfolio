import { memo, useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  age: number;
}

interface Burst {
  x: number;
  y: number;
  age: number;
}

const TRAIL_MAX_AGE = 14;
const BURST_MAX_AGE = 22;

/**
 * Replaces the default cursor with a web-shooter reticle + a short fading
 * thread trail, and fires a radiating web burst on click. Desktop
 * (pointer: fine) only — skipped entirely on touch devices and under
 * prefers-reduced-motion.
 */
export const WebCursor = memo(function WebCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (reduceMotion || !finePointer) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    let visible = false;
    const trail: TrailPoint[] = [];
    const bursts: Burst[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const isDark = () => document.documentElement.classList.contains('dark');
    const color = () => (isDark() ? '225, 29, 46' : '200, 29, 58');

    const onMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      visible = true;
      trail.push({ x: mouseX, y: mouseY, age: 0 });
      if (trail.length > 24) trail.shift();
    };
    const onLeave = () => {
      visible = false;
    };
    const onClick = (e: PointerEvent) => {
      bursts.push({ x: e.clientX, y: e.clientY, age: 0 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const c = color();

      for (let i = trail.length - 1; i >= 0; i--) {
        const p = trail[i];
        p.age += 1;
        if (p.age > TRAIL_MAX_AGE) {
          trail.splice(i, 1);
        }
      }
      ctx.lineJoin = 'round';
      for (let i = 1; i < trail.length; i++) {
        const a = trail[i - 1];
        const b = trail[i];
        const alpha = (1 - b.age / TRAIL_MAX_AGE) * 0.35;
        if (alpha <= 0) continue;
        ctx.strokeStyle = `rgba(${c}, ${alpha})`;
        ctx.lineWidth = Math.max(0.6, 1.6 * (1 - b.age / TRAIL_MAX_AGE));
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        b.age += 1;
        if (b.age > BURST_MAX_AGE) {
          bursts.splice(i, 1);
          continue;
        }
        const t = b.age / BURST_MAX_AGE;
        const radius = t * 26;
        const alpha = (1 - t) * 0.6;
        ctx.strokeStyle = `rgba(${c}, ${alpha})`;
        ctx.lineWidth = 1;
        for (let ray = 0; ray < 8; ray++) {
          const angle = (ray / 8) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(b.x + Math.cos(angle) * radius * 0.4, b.y + Math.sin(angle) * radius * 0.4);
          ctx.lineTo(b.x + Math.cos(angle) * radius, b.y + Math.sin(angle) * radius);
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, radius * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${c}, ${alpha * 0.7})`;
        ctx.stroke();
      }

      if (visible) {
        ctx.strokeStyle = `rgba(${c}, 0.85)`;
        ctx.lineWidth = 1.2;
        const r = 9;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mouseX - r - 5, mouseY);
        ctx.lineTo(mouseX - r + 2, mouseY);
        ctx.moveTo(mouseX + r - 2, mouseY);
        ctx.lineTo(mouseX + r + 5, mouseY);
        ctx.moveTo(mouseX, mouseY - r - 5);
        ctx.lineTo(mouseX, mouseY - r + 2);
        ctx.moveTo(mouseX, mouseY + r - 2);
        ctx.lineTo(mouseX, mouseY + r + 5);
        ctx.stroke();
        ctx.fillStyle = `rgba(${c}, 0.9)`;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    document.body.classList.add('cursor-none');
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);
    window.addEventListener('pointerdown', onClick);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.classList.remove('cursor-none');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('pointerdown', onClick);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[60] pointer-events-none motion-reduce:hidden hidden [@media(pointer:fine)]:block"
    />
  );
});
