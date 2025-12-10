import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Download, MapPin, Instagram } from 'lucide-react';
import { SectionTitle } from '../atoms/SectionTitle';
import { CustomButton } from '../atoms/CustomButton';
import { SocialLink } from '../molecules/SocialLink';

const MotionBox = motion(Box);

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/rajakarungan-j-a51335284/' },
  { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/im_raja_777_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
  { icon: Mail, label: 'Email', url: 'mailto:rajakarunganj@gmail.com' },
];

export const Contact: React.FC = () => {
  const handleDownloadResume = () => {
    window.open('./images/Rajakarungan j Resume.pdf', '_blank');
  };

  return (
    <Box
      id="contact"
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
        <SectionTitle subtitle="Feel free to reach out for collaborations or just a friendly hello">
          Get In Touch
        </SectionTitle>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
                Let's Work Together
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'primary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <Mail size={20} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    rajakarunganj@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'secondary.light',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                >
                  <MapPin size={20} />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Location
                  </Typography>
                  <Typography variant="body1" fontWeight={600}>
                    TamilNadu, India
                  </Typography>
                </Box>
              </Box>

              <CustomButton
                variant="contained"
                color="primary"
                size="large"
                startIcon={<Download size={20} />}
                onClick={handleDownloadResume}
                sx={{ mb: 3 }}
              >
                Download Resume
              </CustomButton>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: 'rgba(255,255,255,0.6)',
                backdropFilter: 'blur(12px)',
                boxShadow: 3,
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                Connect With Me
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Follow me on social media and let's stay connected
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </Box>

              <Box
                sx={{
                  mt: 4,
                  pt: 4,
                  borderTop: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Available for freelance projects and full-time opportunities
                </Typography>
              </Box>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
