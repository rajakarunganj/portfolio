import { Box, Container, Grid } from '@mui/material';
import { SectionTitle } from '../atoms/SectionTitle';
import { ProjectCard } from '../molecules/ProjectCard';

const projects = [
  {
    title: 'Library Management System (Web App)',
    description:
      'A responsive Library Management System built using HTML, CSS, and JavaScript. Features include book record management, search functionality, and basic borrowing/return operations with a clean UI.',
    image: './images/book.avif',
    technologies: ['HTML', 'CSS', 'JavaScript', 'nestjs', 'postgress', 'typeOrm'],
  },
  {
    title: 'Edumee Mobile App & Web App',
    description:
     "Empower Your Learning Journey Be better than yesterday Explore this platform to become better than yesterday with expert mentors, authentic videos, and interactive quizzes.",
    image:
      './images/skillAnalytics.png',
    technologies: ['ReactNative', 'NestJs', 'NextJs','typescript','postgress', 'typeOrm'],
  },
  {
    title: 'ShareMarket WebSite',
    description:
     "Plan for Education, weddings, vacations or buying a home or car.New Home/Car Goal Calculator – Plan for purchase of your new home or car.Special Vacation Goal Calculator – Plan for your special vacation expenses.Child Education Goal Calculator – Plan for your child’s education expenses.",
    image:
      './images/1234567.jpeg',
    technologies: ['React', 'typescript','postgress', 'typeOrm'],
  },
];

export const Projects: React.FC = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        
      }}
    >
      {/* GLOW TOP LEFT */}
      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
          top: -120,
          left: -80,
          filter: 'blur(120px)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      {/* GLOW BOTTOM RIGHT */}
      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)',
          bottom: -120,
          right: -90,
          filter: 'blur(130px)',
          opacity: 0.45,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle subtitle="Some of my recent work and side projects">
          Featured Projects
        </SectionTitle>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.title}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
