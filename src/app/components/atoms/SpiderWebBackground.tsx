import { memo, useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 72;
const LINK_DISTANCE = 170;
const MOUSE_RADIUS = 190;
const PARALLAX_FACTOR = -0.04;
const PARALLAX_MAX = 40;

/**
 * Fixed, full-viewport, mouse-reactive spider-web particle field.
 * Pauses entirely under prefers-reduced-motion and when off-screen/tab-hidden.
 */
export const SpiderWebBackground = memo(function SpiderWebBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    const mouse = { x: -9999, y: -9999 };
    let rafId = 0;
    let running = true;

    const isDark = () => document.documentElement.classList.contains('dark');

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

    const seed = () => {
      const count = width < 640 ? Math.round(NODE_COUNT * 0.5) : NODE_COUNT;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
      }));
    };

    const onPointerMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const lineColor = isDark() ? 'rgba(225, 29, 46,' : 'rgba(200, 29, 58,';
      const dotColor = isDark() ? 'rgba(244, 244, 243,' : 'rgba(24, 24, 27,';

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * 0.6;
          node.x -= dx * force * 0.02;
          node.y -= dy * force * 0.02;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DISTANCE) {
            ctx.strokeStyle = `${lineColor}${0.17 * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const near = Math.hypot(dx, dy) < MOUSE_RADIUS;
        if (near) {
          ctx.shadowColor = `${lineColor}0.9)`;
          ctx.shadowBlur = 8;
        }
        ctx.fillStyle = near ? `${lineColor}0.85)` : `${dotColor}0.3)`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, near ? 2.4 : 1.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const loop = () => {
      if (!running) return;
      draw();
      const drift = Math.max(-PARALLAX_MAX, Math.min(PARALLAX_MAX, window.scrollY * PARALLAX_FACTOR));
      canvas.style.transform = `translateY(${drift}px)`;
      rafId = requestAnimationFrame(loop);
    };

    resize();
    seed();

    if (reduceMotion) {
      draw();
    } else {
      loop();
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('pointerleave', onPointerLeave);
    }

    const onResize = () => {
      resize();
      seed();
      if (reduceMotion) draw();
    };
    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      running = !document.hidden && !reduceMotion;
      if (running) loop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none opacity-55"
    />
  );
});
