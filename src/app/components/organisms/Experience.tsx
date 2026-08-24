import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GradientText } from "../atoms/GradientText";
import { HudLabel } from "../atoms/HudLabel";
import { TimelineItem } from "../molecules/TimelineItem";
import { SceneFrame } from "../molecules/SceneFrame";
import { getEducation, getExperience, TimelineEntryDto } from "../../common/env.common";

function TimelineTrack({ items }: { items: TimelineEntryDto[] }) {
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
        <TimelineItem key={item.id} {...item} delay={index * 0.15} />
      ))}
    </div>
  );
}

export function Experience() {
  const [experiences, setExperiences] = useState<TimelineEntryDto[]>([]);
  const [education, setEducation] = useState<TimelineEntryDto[]>([]);

  useEffect(() => {
    getExperience()
      .then(setExperiences)
      .catch((error) => console.error('Failed to load experience', error));
    getEducation()
      .then(setEducation)
      .catch((error) => console.error('Failed to load education', error));
  }, []);

  return (
    <SceneFrame id="experience" className="py-24 px-6 bg-background overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <HudLabel index="SC.05" align="center" className="mb-4">
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
    </SceneFrame>
  );
}
