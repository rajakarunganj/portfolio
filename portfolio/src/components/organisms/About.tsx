import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';

const MotionBox = motion(Box);

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful interfaces that provide exceptional user experiences.',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Optimizing applications for speed and performance across all devices.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams to deliver high-quality projects on time.',
  },
];

export const About: React.FC = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden',
        background: `
          radial-gradient(circle at 20% 10%, rgba(99,102,241,0.2), transparent 60%),
          radial-gradient(circle at 80% 90%, rgba(56,189,248,0.25), transparent 60%),
          linear-gradient(135deg, #f8fafc 0%, #eef7ff 100%)
        `,
      }}
    >
      {/* GLOW 1 */}
      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
          top: -100,
          left: -80,
          filter: 'blur(110px)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      {/* GLOW 2 */}
      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)',
          bottom: -120,
          right: -90,
          filter: 'blur(120px)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle subtitle="Get to know more about my background and skills">
          About Me
        </SectionTitle>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* LEFT SIDE TEXT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Passionate Developer with a Creative Edge
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph>
                I'm a full-stack developer with over 5 years of experience building web applications.
                My journey in tech started with a curiosity about how things work, which evolved into
                a passion for creating seamless digital experiences.
              </Typography>

              <Typography variant="body1" color="text.secondary" paragraph>
                I specialize in modern web technologies including React, TypeScript, Node.js, and cloud
                platforms. I believe in writing clean, maintainable code and creating intuitive user
                interfaces that people love to use.
              </Typography>

              <Typography variant="body1" color="text.secondary">
                When I'm not coding, you can find me exploring new technologies, contributing to open
                source projects, or mentoring aspiring developers.
              </Typography>
            </MotionBox>
          </Grid>

          {/* FEATURES GRID */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                  <MotionBox
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0px 12px 30px rgba(0,0,0,0.1)' }}
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      background: 'rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.5)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #2563eb, #0891b2)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        boxShadow: '0 6px 15px rgba(0,0,0,0.15)',
                      }}
                    >
                      <feature.icon size={24} />
                    </Box>

                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </MotionBox>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
