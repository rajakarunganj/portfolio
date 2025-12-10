import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const MotionBox = motion(Box);

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, subtitle, align = 'center' }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      sx={{ mb: 6, textAlign: align }}
    >
      <Typography
        variant="h2"
        component="h2"
        color="text.primary"
        sx={{
          position: 'relative',
          display: 'inline-block',
          '&::after': align === 'center' ? {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 4,
            backgroundColor: 'primary.main',
            borderRadius: 2,
          } : {},
        }}
      >
        {children}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 3, maxWidth: 600, mx: align === 'center' ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      )}
    </MotionBox>
  );
};
