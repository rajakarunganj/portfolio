import { IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const MotionLink = motion('a');

export const SocialLink: React.FC<{
  icon: LucideIcon;
  label: string;
  url: string;
  color?: string;
}> = ({ icon: Icon, label, url, color }) => {
  return (
    <Tooltip title={label} arrow>
      <IconButton
        component={MotionLink}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        sx={{
          color: color || 'text.secondary',
          backgroundColor: 'background.paper',
          boxShadow: 1,
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'white',
            boxShadow: 3,
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Icon size={24} />
      </IconButton>
    </Tooltip>
  );
};