import { memo, useEffect, useRef } from 'react';

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  sway: number;
  swaySpeed: number;
  hue: 'primary' | 'gold';
}

interface Smoke {
  x: number;
  y: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
}

const EMBER_COUNT = 46;
const SMOKE_COUNT = 7;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Fixed, full-viewport canvas: rising embers + drifting smoke wisps.
 * Spawn rate/velocity briefly spikes with scroll speed (a "thruster" burst).
 * Pauses under prefers-reduced-motion and when off-screen/tab-hidden.
 */
export const EmberField = memo(function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let embers: Ember[] = [];
    let smokes: Smoke[] = [];
    let rafId = 0;
    let running = true;
    let lastScrollY = window.scrollY;
    let boost = 0;

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

    const spawnEmber = (fromBottom = true): Ember => ({
      x: rand(0, width),
      y: fromBottom ? height + rand(0, 40) : rand(0, height),
      vx: rand(-0.12, 0.12),
      vy: -rand(0.25, 0.7),
      size: rand(1, 2.6),
      life: 0,
      maxLife: rand(220, 420),
      sway: rand(0, Math.PI * 2),
      swaySpeed: rand(0.01, 0.025),
      hue: Math.random() < 0.7 ? 'primary' : 'gold',
    });

    const spawnSmoke = (): Smoke => ({
      x: rand(0, width),
      y: height + rand(20, 120),
      vy: -rand(0.08, 0.18),
      size: rand(120, 240),
      life: 0,
      maxLife: rand(500, 900),
    });

    const seed = () => {
      const count = width < 640 ? Math.round(EMBER_COUNT * 0.5) : EMBER_COUNT;
      embers = Array.from({ length: count }, () => {
        const e = spawnEmber(false);
        e.life = rand(0, e.maxLife);
        return e;
      });
      const smokeCount = width < 640 ? Math.round(SMOKE_COUNT * 0.5) : SMOKE_COUNT;
      smokes = Array.from({ length: smokeCount }, () => {
        const s = spawnSmoke();
        s.life = rand(0, s.maxLife);
        return s;
      });
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScrollY);
      lastScrollY = y;
      boost = Math.min(boost + delta * 0.04, 3);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      boost *= 0.94;

      const emberColor = isDark()
        ? { primary: '225, 29, 46', gold: '201, 162, 39' }
        : { primary: '200, 29, 58', gold: '169, 121, 31' };
      const smokeColor = isDark() ? '20, 18, 20' : '160, 156, 150';

      for (const s of smokes) {
        s.life += 1;
        s.y += s.vy * (1 + boost * 0.15);
        if (s.life > s.maxLife || s.y < -s.size) {
          Object.assign(s, spawnSmoke());
          continue;
        }
        const t = s.life / s.maxLife;
        const alpha = Math.sin(Math.PI * t) * 0.05;
        const grad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size);
        grad.addColorStop(0, `rgba(${smokeColor}, ${alpha})`);
        grad.addColorStop(1, `rgba(${smokeColor}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const e of embers) {
        e.life += 1;
        e.sway += e.swaySpeed;
        e.x += e.vx + Math.sin(e.sway) * 0.3;
        e.y += e.vy * (1 + boost * 0.5);
        if (e.life > e.maxLife || e.y < -20) {
          Object.assign(e, spawnEmber(true));
          continue;
        }
        const t = e.life / e.maxLife;
        const alpha = Math.sin(Math.PI * t) * (0.55 + boost * 0.1) * (0.6 + Math.random() * 0.4);
        const color = emberColor[e.hue];
        ctx.shadowColor = `rgba(${color}, 0.9)`;
        ctx.shadowBlur = 6 + boost * 2;
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const loop = () => {
      if (!running) return;
      draw();
      rafId = requestAnimationFrame(loop);
    };

    resize();
    seed();
    loop();
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      resize();
      seed();
    };
    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) loop();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none motion-reduce:hidden"
    />
  );
});
