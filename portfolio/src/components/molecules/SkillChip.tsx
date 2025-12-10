import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const MotionBox = motion(Box);

export interface SkillChipProps {
  name: string;
  icon?: LucideIcon;
  level?: number;
}

export const SkillChip: React.FC<SkillChipProps> = ({ name, icon: Icon, level = 0 }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 2,
        backgroundColor: 'background.paper',
        boxShadow: 1,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minHeight: 120,
        '&:hover': {
          boxShadow: 3,
          backgroundColor: 'primary.main',
          color: 'white',
          '& .skill-icon': {
            color: 'white',
          },
          '& .skill-name': {
            color: 'white',
          },
        },
      }}
    >
      {Icon && (
        <Box
          className="skill-icon"
          sx={{
            mb: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.3s ease',
            color: 'primary.main',
          }}
        >
          <Icon size={36} />
        </Box>
      )}
      <Typography
        className="skill-name"
        variant="body1"
        fontWeight={600}
        textAlign="center"
        sx={{ transition: 'color 0.3s ease' }}
      >
        {name}
      </Typography>
      {level > 0 && (
        <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: i < level ? 'primary.main' : 'grey.300',
                transition: 'background-color 0.3s ease',
              }}
            />
          ))}
        </Box>
      )}
    </MotionBox>
  );
};
