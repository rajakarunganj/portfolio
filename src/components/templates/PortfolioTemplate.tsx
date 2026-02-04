import { Box } from '@mui/material';
import { Navigation } from '../organisms/Navigation';
import { Hero } from '../organisms/Hero';
import { About } from '../organisms/About';
import { Skills } from '../organisms/Skills';
import { Projects } from '../organisms/Projects';
import { Contact } from '../organisms/Contact';
import { Footer } from '../organisms/Footer';

export const PortfolioTemplate: React.FC = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Navigation />
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
};
