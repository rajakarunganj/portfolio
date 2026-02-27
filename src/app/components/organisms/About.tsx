
import { motion } from 'motion/react';
import { GradientText } from '../atoms/GradientText';
import { Award, Coffee,  Zap } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '1+' },
    { icon: Coffee, label: 'Projects Completed', value: '7' },
    { icon: Zap, label: 'Technologies', value: '10+' }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#F8F9FB] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/10 to-[#7C3AED]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#059669]/10 to-[#06B6D4]/10 rounded-full blur-3xl" />

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
            About <GradientText variant="emerald-teal">Me</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a keen eye for design and a love for clean code
          </p>
        </motion.div>

        {/* Glass Card Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/50"
            style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">My Journey</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
             I'm a full-stack developer with over 1 years of experience building web applications. My journey in tech started with a curiosity about how things work, which evolved into a passion for creating seamless digital experiences.

I specialize in modern web technologies including React, TypeScript, and cloud platforms. I believe in writing clean, maintainable code and creating intuitive user interfaces that people love to use.

When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers.
            </p>
           
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/70 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/50"
            style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">What I Do</h3>
            <ul className="space-y-4">
              {[
                'Full-stack web development with React, Node.js, and modern frameworks',
                'Performance optimization and scalable architecture',
                'Responsive design and cross-browser compatibility',
                'API development and third-party integrations',
                'Continuous learning and staying updated with latest trends'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
