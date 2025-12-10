import { Box, Container, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CustomButton } from '../atoms/CustomButton';

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `
          radial-gradient(circle at 30% 20%, rgba(99, 102, 241, 0.35), transparent 60%),
          radial-gradient(circle at 70% 80%, rgba(56, 189, 248, 0.35), transparent 60%),
          linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)
        `,
        backdropFilter: 'blur(20px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Soft glowing blob 1 */}
      <Box
        sx={{
          position: 'absolute',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
          top: -80,
          left: -60,
          filter: 'blur(90px)',
          opacity: 0.7,
          zIndex: 1,
        }}
      />

      {/* Soft glowing blob 2 */}
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(34,211,238,0.35), transparent 70%)',
          bottom: -100,
          right: -80,
          filter: 'blur(110px)',
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 6,
            py: 8,
          }}
        >
          {/* TEXT SECTION */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                color="primary"
                fontWeight={600}
                sx={{ mb: 2 }}
              >
                Welcome to my portfolio
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #0891b2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Rajakarungan J
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Typography
                variant="h4"
                color="text.secondary"
                sx={{ mb: 3, fontWeight: 400 }}
              >
                Full Stack Developer
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
               I am looking for an opportunity to use my skills and abilities to makea positiveimpact on an it organisation. I am commited to
continuous learning and willing to take on new challenges.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <CustomButton
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </CustomButton>
                <CustomButton
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Me
                </CustomButton>
              </Box>
            </motion.div>
          </MotionBox>

          {/* IMAGE SECTION */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            <MotionAvatar
              src="./images/Raja3.png"
              alt="Profile"
              whileHover={{ scale: 1.05 }}
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
                border: '8px solid white',
              }}
            />
          </MotionBox>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown size={32} color="#2563eb" />
      </motion.div>
    </Box>
  );
};
