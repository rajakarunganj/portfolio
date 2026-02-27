import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { GradientText } from '../atoms/GradientText';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rajakarunganj', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rajakarungan-j-a51335284/', label: 'LinkedIn' },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=rajakarunganj@gmail.com", label: 'Email' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">
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
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
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
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors hover:translate-x-2 inline-block duration-300"
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
                <a href = "https://mail.google.com/mail/?view=cm&fs=1&to=rajakarunganj@gmail.com" target='blank' className="hover:text-white transition-colors">
                  rajakarunganj@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+91 8220782385" className="hover:text-white transition-colors">
                  +91 8220782385
                </a>
              </li>
              <li>Dindigul, TamilNadu, India</li>
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
            © {currentYear} Rajakarungan All rights reserved.
          </p>
          
        </motion.div>
      </div>
    </footer>
  );
}
