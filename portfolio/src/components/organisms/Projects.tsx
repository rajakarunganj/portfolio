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
    title: 'RRT-Based V2V Communication System',
    description:
      'Implemented the Rapidly-exploring Random Tree (RRT) algorithm in Java to improve V2V communication using real-time location data. Focuses on enhanced route optimization and efficient data exchange for intelligent transportation systems.',
    image:
      'https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Java', 'RRT Algorithm', 'Vehicle Networks'],
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
        background: `
          radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18), transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(56,189,248,0.22), transparent 60%),
          linear-gradient(135deg, #f8fafc 0%, #eef7ff 100%)
        `,
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
