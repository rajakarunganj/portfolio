import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-background z-[100] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {/* Web-line sweep */}
      <div className="absolute inset-0 overflow-hidden motion-reduce:hidden">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent animate-scan-line" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(var(--web-line) 1px, transparent 1px), linear-gradient(90deg, var(--web-line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl animate-pulse-glow motion-reduce:hidden" />
            <img
              src="/images/Rajakarungan1.png"
              alt="Logo"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-2xl border-4 border-primary/70"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-2">
            Rajakarungan J
          </h2>
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase">
            Full-Stack Developer
          </p>
        </motion.div>

        <motion.div
          className="mt-10 w-56 h-1 bg-secondary rounded-full overflow-hidden mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-gold"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.9, delay: 0.5, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
