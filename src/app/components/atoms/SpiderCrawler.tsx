import { memo, useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

interface Crawl {
  start: Point;
  control: Point;
  end: Point;
  duration: number;
}

const MIN_IDLE_MS = 22000;
const MAX_IDLE_MS = 48000;
const SPEED_PX_PER_MS = 0.055;
const BODY_LENGTH = 11;
const BODY_WIDTH = 5.5;
const LEG_LENGTH = 11;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Corner-hugging start/control/end triple for one crawl. Both endpoints sit
 * just inside the viewport near a shared corner (one along each of the two
 * edges that meet there), so the whole path stays on-screen and visible —
 * a spider scuttling through a corner, not off in the margins.
 */
function makeCrawl(width: number, height: number): Crawl {
  const edgeMargin = 24;
  const near = (max: number) => rand(edgeMargin, Math.max(edgeMargin + 40, max));
  const corners: Array<[Point, Point]> = [
    // top-left: along top edge, along left edge
    [{ x: near(width * 0.38), y: rand(edgeMargin, edgeMargin + 46) }, { x: rand(edgeMargin, edgeMargin + 46), y: near(height * 0.38) }],
    // top-right: along top edge, along right edge
    [{ x: rand(width * 0.62, width - edgeMargin), y: rand(edgeMargin, edgeMargin + 46) }, { x: rand(width - edgeMargin - 46, width - edgeMargin), y: near(height * 0.38) }],
    // bottom-right: along right edge, along bottom edge
    [{ x: rand(width - edgeMargin - 46, width - edgeMargin), y: rand(height * 0.62, height - edgeMargin) }, { x: rand(width * 0.62, width - edgeMargin), y: rand(height - edgeMargin - 46, height - edgeMargin) }],
    // bottom-left: along bottom edge, along left edge
    [{ x: rand(edgeMargin, width * 0.38), y: rand(height - edgeMargin - 46, height - edgeMargin) }, { x: rand(edgeMargin, edgeMargin + 46), y: rand(height * 0.62, height - edgeMargin) }],
  ];
  const pair = corners[Math.floor(Math.random() * corners.length)];
  const [a, b] = Math.random() < 0.5 ? pair : [pair[1], pair[0]];
  const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  // Bow toward the screen interior so the arc never drifts back off-edge.
  const towardCenter = { x: width / 2 - mid.x, y: height / 2 - mid.y };
  const centerLen = Math.hypot(towardCenter.x, towardCenter.y) || 1;
  const bow = rand(20, 60);
  const control = {
    x: mid.x + (towardCenter.x / centerLen) * bow,
    y: mid.y + (towardCenter.y / centerLen) * bow,
  };
  const distance = len * 1.15;
  const duration = Math.min(9000, Math.max(4000, distance / SPEED_PX_PER_MS));
  return { start: a, control, end: b, duration };
}

function bezierPoint(c: Crawl, t: number): Point {
  const it = 1 - t;
  return {
    x: it * it * c.start.x + 2 * it * t * c.control.x + t * t * c.end.x,
    y: it * it * c.start.y + 2 * it * t * c.control.y + t * t * c.end.y,
  };
}

/**
 * A small procedural spider silhouette that periodically crawls through a
 * screen corner along a curved path, legs animating with an alternating
 * gait. Purely decorative and infrequent — a Spider-Man easter egg, not a
 * constant presence. Pauses under prefers-reduced-motion / tab-hidden.
 */
export const SpiderCrawler = memo(function SpiderCrawler() {
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
    let rafId = 0;
    let running = true;
    let crawl: Crawl | null = null;
    let crawlStartedAt = 0;
    let nextSpawnAt = performance.now() + rand(4000, 14000);

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

    const drawSpider = (pos: Point, angle: number, alpha: number, time: number) => {
      const glow = isDark() ? '225, 29, 46' : '200, 29, 58';
      const fwd = { x: Math.cos(angle), y: Math.sin(angle) };
      const right = { x: -Math.sin(angle), y: Math.cos(angle) };
      const world = (localForward: number, localSide: number): Point => ({
        x: pos.x + fwd.x * localForward + right.x * localSide,
        y: pos.y + fwd.y * localForward + right.y * localSide,
      });

      ctx.save();
      ctx.globalAlpha = alpha;

      // Legs — rendered as glowing lines (a near-black stroke reads as
      // invisible against the near-black dark-mode background).
      ctx.strokeStyle = isDark() ? `rgba(${glow}, 0.6)` : 'rgba(15, 18, 15, 0.7)';
      ctx.shadowColor = `rgba(${glow}, 0.5)`;
      ctx.shadowBlur = isDark() ? 3 : 1.5;
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        const row = i % 4;
        const side = i < 4 ? -1 : 1;
        const group = (row % 2 === 0 ? 0 : 1) ^ (side > 0 ? 1 : 0);
        const phase = time * 0.009 + (group === 0 ? 0 : Math.PI);
        const swing = Math.sin(phase) * 4;
        const attachF = BODY_LENGTH * 0.5 - row * (BODY_LENGTH / 2.6);
        const attachS = side * BODY_WIDTH * 0.35;
        const kneeF = attachF + swing * 0.5;
        const kneeS = attachS + side * LEG_LENGTH * 0.55;
        const tipF = attachF + swing;
        const tipS = attachS + side * LEG_LENGTH;

        const a = world(attachF, attachS);
        const k = world(kneeF, kneeS);
        const t = world(tipF, tipS);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(k.x, k.y, t.x, t.y);
        ctx.stroke();
      }
      ctx.shadowBlur = 0;

      // Body: abdomen + cephalothorax — dark fill with a faint glowing
      // outline so the silhouette reads against a near-black bg without
      // overpowering it.
      ctx.fillStyle = isDark() ? 'rgba(4, 8, 5, 0.9)' : 'rgba(10, 13, 10, 0.85)';
      ctx.strokeStyle = `rgba(${glow}, 0.65)`;
      ctx.shadowColor = `rgba(${glow}, 0.5)`;
      ctx.shadowBlur = isDark() ? 3 : 1;
      ctx.lineWidth = 0.9;

      const abdomen = world(-BODY_LENGTH * 0.32, 0);
      ctx.beginPath();
      ctx.ellipse(abdomen.x, abdomen.y, BODY_LENGTH * 0.62, BODY_WIDTH * 0.6, angle, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      const head = world(BODY_LENGTH * 0.38, 0);
      ctx.beginPath();
      ctx.ellipse(head.x, head.y, BODY_LENGTH * 0.34, BODY_WIDTH * 0.42, angle, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.restore();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      if (!crawl && time >= nextSpawnAt) {
        crawl = makeCrawl(width, height);
        crawlStartedAt = time;
      }

      if (crawl) {
        const elapsed = time - crawlStartedAt;
        const t = Math.min(1, elapsed / crawl.duration);
        const pos = bezierPoint(crawl, t);
        const ahead = bezierPoint(crawl, Math.min(1, t + 0.01));
        const angle = Math.atan2(ahead.y - pos.y, ahead.x - pos.x);
        const fadeIn = Math.min(1, elapsed / 400);
        const fadeOut = Math.min(1, (crawl.duration - elapsed) / 400);
        const alpha = Math.max(0, Math.min(fadeIn, fadeOut)) * 0.55;

        if (alpha > 0.01) drawSpider(pos, angle, alpha, time);

        if (t >= 1) {
          crawl = null;
          nextSpawnAt = time + rand(MIN_IDLE_MS, MAX_IDLE_MS);
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    const loop = (t: number) => {
      if (!running) return;
      draw(t);
    };

    resize();
    rafId = requestAnimationFrame(loop);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      running = !document.hidden;
      if (running) rafId = requestAnimationFrame(loop);
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[20] pointer-events-none motion-reduce:hidden"
    />
  );
});
