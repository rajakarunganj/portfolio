import { motion } from 'motion/react';
import { GradientText } from '../atoms/GradientText';
import { HudLabel } from '../atoms/HudLabel';
import { Award, Coffee, Zap } from 'lucide-react';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { icon: Award, label: 'Years Experience', target: 1, suffix: '+' },
  { icon: Coffee, label: 'Projects Completed', target: 7, suffix: '' },
  { icon: Zap, label: 'Technologies', target: 10, suffix: '+' },
];

function StatCard({
  icon: Icon,
  label,
  target,
  suffix,
  delay,
}: (typeof stats)[number] & { delay: number }) {
  const { ref, value } = useCountUp(target);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-card rounded-2xl p-6 shadow-lg text-center border border-border flex flex-col items-center justify-center"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-3xl font-bold text-foreground mb-2 font-display tabular-nums">
        {value}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HudLabel index="02" align="center" className="mb-4">
            Profile
          </HudLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <GradientText variant="emerald-teal">Me</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for clean code
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Journey — large tile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-glass-bg backdrop-blur-md rounded-3xl p-8 shadow-lg border border-glass-border"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-4 whitespace-pre-line">
              I'm a full-stack developer with over a year of experience building web applications. My journey in tech started with a curiosity about how things work, which evolved into a passion for creating seamless digital experiences.

              I specialize in modern web technologies including React, TypeScript, and cloud platforms. I believe in writing clean, maintainable code and creating intuitive user interfaces that people love to use.

              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers.
            </p>
          </motion.div>

          {/* What I Do — tall side tile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-glass-bg backdrop-blur-md rounded-3xl p-8 shadow-lg border border-glass-border"
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">What I Do</h3>
            <ul className="space-y-4">
              {[
                'Full-stack web development with React, Node.js, and modern frameworks',
                'Performance optimization and scalable architecture',
                'Responsive design and cross-browser compatibility',
                'API development and third-party integrations',
                'Continuous learning and staying updated with latest trends',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Stats — same bento row */}
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={0.5 + index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
