import { Button, ButtonProps } from '@mui/material';
import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';

const MotionButton = motion(Button);

interface CustomButtonProps extends ButtonProps {
  animate?: boolean;
}

// Combine ButtonProps and Motion props
type MotionButtonProps = ButtonProps & HTMLMotionProps<'button'>;

export const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ animate = true, children, ...props }, ref) => {
    if (animate) {
      return (
        <MotionButton
          ref={ref}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          {...(props as MotionButtonProps)} 
        >
          {children}
        </MotionButton>
      );
    }

    return (
      <Button ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = 'CustomButton';
