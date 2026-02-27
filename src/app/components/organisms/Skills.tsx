import { motion } from 'motion/react';
import { Code2, Database,   } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';
import { SkillCard } from '../molecules/SkillCard';

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, Next.js, and modern CSS frameworks. Building responsive and performant interfaces.',
      gradient: 'linear-gradient(135deg, #2563EB, #7C3AED)'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Nest.js, REST APIs, and database design with PostgreSQL and MongoDB.',
      gradient: 'linear-gradient(135deg, #059669, #06B6D4)'
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <GradientText variant="blue-violet">Skills</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A diverse set of technical skills and expertise across the development stack
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              gradient={skill.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Technology Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {[
              'React', 'TypeScript', 'Node.js', 'Next.js',
              'PostgreSQL', 'React-Native', 'Html','Css','Bootstrap',
              'Go lang', 'Git', 'Nest js','javascript'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md border border-gray-200 text-gray-700 font-medium hover:shadow-lg transition-shadow"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
