import { motion } from 'motion/react';
import { useSceneCamera } from '../../hooks/useSceneCamera';

interface SceneFrameProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** Optional external ref to also attach to the section (e.g. for a section-local useParallax). */
  sectionRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Wraps a section's existing content with the cinematic "scene" treatment:
 * a subtle scroll-driven camera push-in (scale / blur / rotateX) via
 * `useSceneCamera`. (Viewport-level HUD framing lives in `FrameBrackets`,
 * fixed globally, since it needs to track the viewport, not a single tall
 * section.) Content passed as `children` is rendered unchanged inside.
 */
export function SceneFrame({ id, className = '', children, sectionRef }: SceneFrameProps) {
  const camera = useSceneCamera<HTMLElement>();

  return (
    <section
      id={id}
      ref={(node: HTMLElement | null) => {
        (camera.ref as React.MutableRefObject<HTMLElement | null>).current = node;
        if (sectionRef) (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
      }}
      className={`relative ${className}`}
      style={{ perspective: '1400px' }}
    >
      <motion.div
        style={{
          scale: camera.scale,
          filter: camera.blur,
          rotateX: camera.rotateX,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}
