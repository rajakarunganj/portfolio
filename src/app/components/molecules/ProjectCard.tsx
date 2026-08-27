import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Badge } from '../atoms/Badge';
import { useTilt } from '../../hooks/useTilt';

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  tags: Array<{ name: string; color: 'blue' | 'emerald' | 'violet' | 'coral' | 'gold' }>;
  liveUrl?: string;
  githubUrl?: string;
  reverse?: boolean;
}

const ProjectCardComponent = ({
  index,
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  reverse = false,
}: ProjectCardProps) => {
  const tilt = useTilt(4);

  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col md:items-center gap-8 md:gap-14 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      {/* Image */}
      <div className="md:w-1/2 w-full">
        <div
          ref={tilt.ref}
          onPointerMove={tilt.onPointerMove}
          onPointerLeave={tilt.onPointerLeave}
          style={{ ...tilt.style, transformStyle: 'preserve-3d' }}
          className="group relative rounded-2xl overflow-hidden shadow-2xl border border-border"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={tilt.glareStyle}
            aria-hidden="true"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2 w-full">
        <h3 className="text-2xl sm:text-3xl font-display font-semibold text-foreground mb-4">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <Badge key={i} color={tag.color}>
              {tag.name}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
            >
              View Live
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectCard = React.memo(ProjectCardComponent);
