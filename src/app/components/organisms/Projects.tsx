import { motion } from 'motion/react';
import { GradientText } from '../atoms/GradientText';
import { ProjectCard } from '../molecules/ProjectCard';

export function Projects() {
  const projects = [
    {
      title: 'Library Management System (Web App)',
      description: 'A responsive Library Management System built using HTML, CSS, and JavaScript. Features include book record management, search functionality, and basic borrowing/return operations with a clean UI.',
      image: '/images/book.avif',
      tags: [
        { name: 'Html', color: 'blue' as const },
        { name: 'Nest.js', color: 'emerald' as const },
        { name: 'css', color: 'violet' as const },
        { name: 'Javascript', color: 'gold' as const }
      ],
     
    },
    {
      title: 'Edumee Mobile App ',
      description: 'Empower Your Learning Journey Be better than yesterday Explore this platform to become better than yesterday with expert mentors, authentic videos, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcxOTUyNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: [
        { name: 'React Native', color: 'blue' as const },
        { name: 'Expo', color: 'coral' as const },
        { name: 'NestJs', color: 'violet' as const },
        { name: 'TypeScript', color: 'gold' as const }
      ],
      
    },
    {
      title: 'Edumee WebApp',
      description: 'Empower Your Learning Journey Be better than yesterday Explore this platform to become better than yesterday with expert mentors, authentic videos, and interactive quizzes.',
      image: '/images/skillAnalytics.png',
      tags: [
        { name: 'TypeScript', color: 'blue' as const },
        { name: 'React + Vite', color: 'emerald' as const },
        { name: 'MUI', color: 'violet' as const },
        { name: 'Nest Js', color: 'gold' as const }
      ],
       liveUrl: 'https://edumee.mysoaring.com',
     
    },
    {
      title: 'ShareMarket company WebPage',
      description: 'Plan for Education, weddings, vacations or buying a home or car.New Home/Car Goal Calculator – Plan for purchase of your new home or car.Special Vacation Goal Calculator – Plan for your special vacation expenses.Child Education Goal Calculator – Plan for your child’s education expenses.',
      image: '/images/1234567.jpeg',
      tags: [
       { name: 'TypeScript', color: 'blue' as const },
        { name: 'React + Vite', color: 'emerald' as const },
        { name: 'MUI', color: 'violet' as const },
        { name: 'Nest Js', color: 'gold' as const }
      ],
       liveUrl: 'https://sumarg.com',
    },

    {
      title: 'Sharemarket WebApp',
      description: 'Plan for Education, weddings, vacations or buying a home or car.New Home/Car Goal Calculator – Plan for purchase of your new home or car.Special Vacation Goal Calculator – Plan for your special vacation expenses.Child Education Goal Calculator – Plan for your child’s education expenses.',
      image: '/images/image.png',
      tags: [
         { name: 'TypeScript', color: 'blue' as const },
        { name: 'React + Vite', color: 'emerald' as const },
        { name: 'MUI', color: 'violet' as const },
        { name: 'Python', color: 'gold' as const }
      ],
      liveUrl: 'https://sumarg.com/login',
   
    },
    
    {
      title: 'Developer Portfolio',
      description: 'Premium portfolio website with modern animations, dark mode, and responsive design.',
      image: 'https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzE5MTMyODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: [
        { name: 'TypeScript', color: 'blue' as const },
        { name: 'React + Vite', color: 'emerald' as const },
        { name: 'MUI', color: 'violet' as const },
      ],
      liveUrl: 'https://rajakarunganj.vercel.app',
    },

     {
      title: 'Company Website ',
      description: 'We are a product-based software company passionate about building digital platforms that empower organizations. Our solutions simplify complex workflows, automate processes, and unlock new opportunities for growth.',
      image: '/images/sofware.png',
      tags: [
       { name: 'TypeScript', color: 'blue' as const },
        { name: 'React + Vite', color: 'emerald' as const },
        { name: 'MUI', color: 'violet' as const },
      ],
      liveUrl: 'https://www.mysoaring.com',
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#F8F9FB] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[#059669]/10 to-transparent rounded-full blur-3xl" />

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
            Featured <GradientText variant="rainbow">Projects</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work showcasing creativity and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
