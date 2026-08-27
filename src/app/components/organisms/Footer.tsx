import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';
import { StatusTick } from '../atoms/HudChrome';
import { useParallax } from '../../hooks/useParallax';

export function Footer() {
  const parallax = useParallax<HTMLElement>(30);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rajakarunganj', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajakarungan-j-a51335284/', label: 'LinkedIn' },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajakarunganj@gmail.com", label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer ref={parallax.ref} className="bg-[#0A0A0C] text-white py-16 px-6 relative overflow-hidden border-t border-white/5">
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: parallax.y }} aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>
      <svg
        className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.04] pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {[20, 45, 70, 95, 120].map((r) => (
          <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
        {[0, 30, 60, 90].map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="200"
            x2={200 - 140 * Math.cos((deg * Math.PI) / 180)}
            y2={200 - 140 * Math.sin((deg * Math.PI) / 180)}
            stroke="currentColor"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-[10px] tracking-[0.35em] uppercase text-white/40 mb-10"
        >
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4 font-display">
              <GradientText variant="blue-violet">Rajakarungan J</GradientText>
            </h3>
            <p className="text-gray-400 mb-6">
              Full-Stack Developer
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary/80 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajakarunganj@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  rajakarunganj@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918220782385" className="hover:text-primary transition-colors">
                  +91 8220782385
                </a>
              </li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Rajakarungan J. All rights reserved.
          </p>
          <StatusTick label="System Online" />
        </motion.div>
      </div>
    </footer>
  );
}
