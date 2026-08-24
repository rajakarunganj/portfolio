import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { GradientText } from '../atoms/GradientText';
import { HudLabel } from '../atoms/HudLabel';
import { ProjectCard } from '../molecules/ProjectCard';
import { SceneFrame } from '../molecules/SceneFrame';
import { getProjects, ProjectDto } from '../../common/env.common';

export function Projects() {
  const [projects, setProjects] = useState<ProjectDto[]>([]);

  useEffect(() => {
    getProjects()
      .then(setProjects)
      .catch((error) => console.error('Failed to load projects', error));
  }, []);

  return (
    <SceneFrame id="projects" className="py-24 px-6 bg-secondary/30 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <HudLabel index="SC.04" align="center" className="mb-4">
            Selected Work
          </HudLabel>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <GradientText variant="rainbow">Projects</GradientText>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing creativity and technical expertise
          </p>
        </motion.div>

        {/* Editorial Rows */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index + 1} reverse={index % 2 === 1} {...project} />
          ))}
        </div>
      </div>
    </SceneFrame>
  );
}
