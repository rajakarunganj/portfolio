import { Box, Container, Typography, Divider } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
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
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)',
          top: -80,
          left: -60,
          filter: 'blur(90px)',
          opacity: 0.5,
          zIndex: 1,
        }}
      />

      {/* GLOW BOTTOM RIGHT */}
      <Box
        sx={{
          position: 'absolute',
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)',
          bottom: -80,
          right: -60,
          filter: 'blur(100px)',
          opacity: 0.45,
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Divider sx={{ mb: 3 }} />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
          >
            Made with by Rajakarungan J
          </Typography>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
