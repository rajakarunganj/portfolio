import { Box, Container, Grid } from '@mui/material';
import { Code2, Database, Layout, Smartphone, GitBranch } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { SkillChip } from '../molecules/SkillChip';

const skills = [
  { name: 'React', icon: Code2, level: 5 },
  { name: 'TypeScript', icon: Code2, level: 5 },
  { name: 'JavaScript', icon: Code2, level: 5 },
  { name: 'HTML', icon: Layout, level: 5 },
  { name: 'CSS', icon: Layout, level: 5 },
  { name: 'BootStrap', icon: Layout, level: 5 },
  { name: 'PostgreSQL', icon: Database, level: 4 },
  { name: 'React Native', icon: Smartphone, level: 3 },
  { name: 'Git', icon: GitBranch, level: 5 },
  { name: 'Nest Js', icon: Code2, level: 4 },
  { name: 'Next Js', icon: Code2, level: 3 },
  { name: 'Java', icon: Code2, level: 3 },
];

export const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
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
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
          top: -100,
          left: -80,
          filter: 'blur(110px)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      {/* GLOW BOTTOM RIGHT */}
      <Box
        sx={{
          position: 'absolute',
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)',
          bottom: -100,
          right: -80,
          filter: 'blur(120px)',
          opacity: 0.45,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle subtitle="Technologies and tools I work with">
          Skills & Expertise
        </SectionTitle>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={skill.name}>
              <SkillChip name={skill.name} icon={skill.icon} level={skill.level} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
