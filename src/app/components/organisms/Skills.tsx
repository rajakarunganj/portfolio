import { Fragment } from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, PenTool, Code2, FlaskConical, Rocket, ArrowRight,
  Server, Database, Braces, FileCode, Layers, Smartphone, Globe,
  Palette, LayoutGrid, Boxes, Terminal, GitBranch, type LucideIcon,
} from 'lucide-react';
import { GradientText } from '../atoms/GradientText';
import { HudLabel } from '../atoms/HudLabel';

interface Category {
  id: string;
  label: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

interface Tool {
  name: string;
  icon: LucideIcon;
  category: string;
}

const steps: { icon: LucideIcon; label: string; description: string }[] = [
  { icon: BookOpen, label: 'Learn', description: 'Explore new tools, frameworks, and best practices.' },
  { icon: PenTool, label: 'Design', description: 'Plan clean, scalable architecture before writing code.' },
  { icon: Code2, label: 'Build', description: 'Implement features with clean, maintainable code.' },
  { icon: FlaskConical, label: 'Test', description: 'Debug, optimize, and refine for performance.' },
  { icon: Rocket, label: 'Ship', description: 'Deploy and iterate based on real feedback.' },
];

const categories: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend & Mobile',
    icon: Code2,
    color: 'var(--primary)',
    description: 'Building responsive, performant interfaces and cross-platform apps with modern component frameworks.',
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: Server,
    color: 'var(--accent)',
    description: 'Designing REST APIs and server-side services with a focus on maintainability and performance.',
  },
  {
    id: 'database',
    label: 'Database & Tools',
    icon: Database,
    color: 'var(--gold)',
    description: 'Schema design, query optimization, and the version-control workflow that ties it all together.',
  },
];

const tools: Tool[] = [
  { name: 'React', icon: Code2, category: 'frontend' },
  { name: 'TypeScript', icon: Braces, category: 'frontend' },
  { name: 'JavaScript', icon: FileCode, category: 'frontend' },
  { name: 'Next.js', icon: Layers, category: 'frontend' },
  { name: 'React Native', icon: Smartphone, category: 'frontend' },
  { name: 'HTML', icon: Globe, category: 'frontend' },
  { name: 'CSS', icon: Palette, category: 'frontend' },
  { name: 'Bootstrap', icon: LayoutGrid, category: 'frontend' },
  { name: 'Node.js', icon: Server, category: 'backend' },
  { name: 'NestJS', icon: Boxes, category: 'backend' },
  { name: 'Go', icon: Terminal, category: 'backend' },
  { name: 'PostgreSQL', icon: Database, category: 'database' },
  { name: 'Git', icon: GitBranch, category: 'database' },
];

const categoryColor = (id: string) => categories.find((c) => c.id === id)?.color ?? 'var(--primary)';

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HudLabel index="03" align="center" className="mb-4">
            Capabilities
          </HudLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <GradientText variant="blue-violet">Skills</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How I work, and the technologies I work with
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-start justify-between gap-6 sm:gap-2 mb-20">
          {steps.map((step, i) => (
            <Fragment key={step.label}>
              {i > 0 && (
                <div className="hidden sm:flex items-center justify-center shrink-0 pt-[18px]" aria-hidden="true">
                  <ArrowRight className="w-5 h-5 text-primary/30" />
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex sm:flex-col items-center gap-4 sm:gap-3 flex-1 text-left sm:text-center group"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-glow">
                  <step.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">
                    {i + 1}. {step.label}
                  </h3>
                  <p className="text-sm text-muted-foreground sm:max-w-[10rem]">{step.description}</p>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>

        {/* Categories + Tools */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skill Categories */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl border border-border shadow-lg p-8"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">Skill Categories</h3>
            <div className="space-y-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${cat.color}, var(--primary-dark))` }}
                  >
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{cat.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools I Use */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-3xl border border-border shadow-lg p-8"
          >
            <h3 className="text-xl font-display font-semibold text-foreground mb-6">Technical Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center text-center gap-2 rounded-2xl border border-border p-4 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `color-mix(in srgb, ${categoryColor(tool.category)} 15%, transparent)` }}
                  >
                    <tool.icon className="w-5 h-5" style={{ color: categoryColor(tool.category) }} />
                  </div>
                  <span className="text-xs font-medium text-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
