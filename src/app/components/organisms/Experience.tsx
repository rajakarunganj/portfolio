import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GradientText } from "../atoms/GradientText";
import { HudLabel } from "../atoms/HudLabel";
import { TimelineItem } from "../molecules/TimelineItem";

interface TimelineEntry {
  year: string;
  title: string;
  company: string;
  description: string;
  color: string;
}

const experiences: TimelineEntry[] = [
  {
    year: "2024 - Present",
    title: "Junior Full-Stack Developer",
    company: "My Soaring",
    description:
      "We are a product-based software company passionate about building digital platforms that empower organizations. Our solutions simplify complex workflows, automate processes, and unlock new opportunities for growth.",
    color: "var(--primary)",
  },
];

const education: TimelineEntry[] = [
  {
    year: "2019 - 2020",
    title: "Higher Secondary",
    company: "Rc Hr Sec School",
    description: "Computer Science • Percentage: 70/100",
    color: "var(--gold)",
  },
  {
    year: "2020 - 2024",
    title: "Bachelor Of Engineering",
    company: "Gnanamani College of Technology",
    description: "Computer Science And Engineering • GPA: 7.73/10",
    color: "var(--accent)",
  },
];

function TimelineTrack({ items }: { items: TimelineEntry[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={trackRef} className="relative">
      <div
        className="absolute left-0 top-0 bottom-0 w-px origin-top"
        style={{
          background: 'linear-gradient(to bottom, var(--web-line-strong), var(--web-line) 60%, transparent)',
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px origin-top bg-primary motion-reduce:hidden"
        style={{ scaleY: lineScale, boxShadow: '0 0 8px var(--spider-glow)' }}
        aria-hidden="true"
      />
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} delay={index * 0.15} />
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HudLabel index="05" align="center" className="mb-4">
            Career Path
          </HudLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <GradientText variant="blue-violet">Experience</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and career progression over the year
          </p>
        </motion.div>

        {/* Work Timeline */}
        <TimelineTrack items={experiences} />

        {/* Education Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-center mb-10 text-foreground font-display">
            Education
          </h3>
          <TimelineTrack items={education} />
        </div>
      </div>
    </section>
  );
}
