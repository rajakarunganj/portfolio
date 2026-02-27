import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '../atoms/Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: Array<{ name: string; color: 'blue' | 'emerald' | 'violet' | 'coral' | 'gold' }>;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl,
  delay = 0 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/90 to-[#7C3AED]/90 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2563EB] hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#2563EB] hover:scale-110 transition-transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} color={tag.color}>
              {tag.name}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
