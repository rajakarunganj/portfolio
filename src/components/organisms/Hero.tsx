import { Box, Container, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CustomButton } from '../atoms/CustomButton'; 
import { theme } from '../../theme/theme';

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
       
        backdropFilter: 'blur(28px)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          
          backdropFilter: 'blur(12px)',
          zIndex: 0,
        },
      }}
    >
      {/* Glowing blob 1 */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 280, md: 420 },
          height: { xs: 280, md: 420 },
          background: 'radial-gradient(circle, rgba(139,92,246,0.38), transparent 65%)',
          top: -120,
          left: -100,
          filter: 'blur(100px)',
          opacity: 0.75,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Glowing blob 2 */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 320, md: 480 },
          height: { xs: 320, md: 480 },
          background: 'radial-gradient(circle, rgba(168,85,247,0.32), transparent 65%)',
          bottom: -140,
          right: -120,
          filter: 'blur(120px)',
          opacity: 0.65,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 8 },
            py: { xs: 6, md: 10 },
          }}
        >
          {/* TEXT SECTION */}
          <MotionBox
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { md: '55%' },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <Typography
                variant="body1"
                color="primary"
                fontWeight={600}
                sx={{ mb: 2, letterSpacing: 1 }}
              >
                WELCOME TO MY PORTFOLIO
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Typography variant="h1" component="h1" sx={{ mb: 2, fontSize: { xs: '3rem', md: '4.5rem' } }}>
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: theme.palette.primary.main,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                  }}
                >
                  Rajakarungan J
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Typography
                variant="h4"
                color="text.secondary"
                sx={{ mb: 4, fontWeight: 400, fontSize: { xs: '1.5rem', md: '2rem' } }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 5, maxWidth: 520, lineHeight: 1.7, fontSize: '1.1rem' }}
              >
                I am looking for an opportunity to use my skills and abilities to make a positive impact on an IT organisation. 
                I am committed to continuous learning and willing to take on new challenges.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
            >
              <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <CustomButton
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    background: theme.palette.primary.main,
                    color: 'white',
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    '&:hover': {
                      background: theme.palette.primary.light,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(124, 58, 237, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View My Work
                </CustomButton>

                <CustomButton
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    px: 5,
                    py: 1.5,
                    fontWeight: 600,
                    borderRadius: 3,
                    '&:hover': {
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      background: 'rgba(124, 58, 237, 0.08)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Me
                </CustomButton>
              </Box>
            </motion.div>
          </MotionBox>


          <MotionBox
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
            sx={{ flex: 1, display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}
          >
           <MotionAvatar
  src="./images/Raja1.png"
  alt="Rajakarungan J – Full Stack Developer"
  whileHover={{ scale: 1.08, rotate: 2 }}
  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
  sx={{
    width: { xs: 260, sm: 300, md: 360, lg: 370 },
    height: { xs: 260, sm: 300, md: 360, lg: 500 },
    objectFit: 'cover',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.18)',
    borderRadius: '16px',
    border: '5px solid transparent',

    background: `
      radial-gradient(circle, rgba(112, 46, 175, 0.32), transparent 65%)
    `,
  }}
/>

          </MotionBox>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          zIndex: 3,
        }}
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={36} color="#7c3aed" strokeWidth={2.5} />
      </motion.div>
    </Box>
  );
};