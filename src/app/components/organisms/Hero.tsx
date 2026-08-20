import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { GradientText } from "../atoms/GradientText";
import { Button } from "../atoms/Button";
import { FloatingShape } from "../atoms/FloatingShape";
import { HudLabel } from "../atoms/HudLabel";
import { StatusTick } from "../atoms/HudChrome";
import { ProfileImage } from "../molecules/ProfileImage";
import { useMagnetic } from "../../hooks/useMagnetic";
import { useParallax } from "../../hooks/useParallax";

const NAME = "Rajakarungan J";

function MagneticButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const magnetic = useMagnetic();
  return (
    <span
      ref={magnetic.ref as React.RefObject<HTMLSpanElement>}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      style={magnetic.style}
      className="inline-block"
    >
      <Button {...props}>{children}</Button>
    </span>
  );
}

export function Hero() {
  const parallax = useParallax<HTMLElement>(70);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={parallax.ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-28 sm:py-20"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/40" />

      {/* Opening light-sweep wipe */}
      <motion.div
        initial={{ opacity: 0.9, x: '-120%' }}
        animate={{ opacity: 0, x: '120%' }}
        transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.15 }}
        className="absolute inset-0 z-20 pointer-events-none motion-reduce:hidden"
        style={{
          background:
            'linear-gradient(100deg, transparent 40%, var(--primary) 48%, var(--foreground) 50%, var(--accent) 52%, transparent 60%)',
          mixBlendMode: 'screen',
        }}
        aria-hidden="true"
      />

      {/* Scene tag */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-hud-text"
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow motion-reduce:hidden" />
        Scene 01 — Open
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: parallax.y }} aria-hidden="true">
        <FloatingShape
          color="linear-gradient(135deg, var(--primary), var(--primary-dark))"
          size={420}
          top="8%"
          left="2%"
          delay={0}
          duration={7}
        />
        <FloatingShape
          color="linear-gradient(135deg, var(--accent), var(--primary-dark))"
          size={340}
          top="55%"
          right="4%"
          delay={1.2}
          duration={8}
        />
        <FloatingShape
          color="linear-gradient(135deg, var(--gold), var(--primary))"
          size={260}
          bottom="6%"
          left="18%"
          delay={2}
          duration={9}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex md:justify-start justify-center mb-5"
          >
            <HudLabel index="SC.01">Welcome</HudLabel>
          </motion.div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
            aria-label={`I'm ${NAME}`}
          >
            <span aria-hidden="true">
              I'm{" "}
              <GradientText variant="blue-violet">
                {NAME.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 24, rotateX: -60 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.035 }}
                  >
                    {char === " " ? " " : char}
                  </motion.span>
                ))}
              </GradientText>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-display"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0"
          >
            I am looking for an opportunity to use my skills and abilities to
            make a positive impact on an IT organisation. I am committed to
            continuous learning and willing to take on new challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          >
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </MagneticButton>
            <MagneticButton
              variant="secondary"
              size="lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/images/Rajakarungan_jeyaraj.pdf";
                link.download = "Rajakarungan_jeyaraj_resume.pdf";
                link.click();
              }}
            >
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a
              href="https://github.com/rajakarunganj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary/40 shadow-md hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajakarungan-j-a51335284/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary/40 shadow-md hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rajakarunganj@gmail.com"
              aria-label="Email"
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary/40 shadow-md hover:shadow-glow transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-end gap-6"
        >
          <ProfileImage src="/images/Rajakarungan1.png" />

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="w-full max-w-[260px] rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-md px-4 py-3 space-y-2"
          >
            <StatusTick label="Status — Available" />
            <StatusTick label="Role — Full-Stack Dev" />
            <StatusTick label="Base — Chennai, IN" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-hud-text motion-reduce:hidden"
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Reel 01 ▸ Scroll to Begin</span>
        <span className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
