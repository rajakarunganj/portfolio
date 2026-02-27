import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { GradientText } from "../atoms/GradientText";
import { Button } from "../atoms/Button";
import { FloatingShape } from "../atoms/FloatingShape";
import { ProfileImage } from "../molecules/ProfileImage";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8F9FB] to-[#FFFFFF] px-6 py-20">
      {/* Floating Background Shapes */}
      <FloatingShape
        color="linear-gradient(135deg, #2563EB, #7C3AED)"
        size={400}
        top="10%"
        left="5%"
        delay={0}
      />
      <FloatingShape
        color="linear-gradient(135deg, #059669, #06B6D4)"
        size={350}
        top="60%"
        right="10%"
        delay={1}
      />
      <FloatingShape
        color="linear-gradient(135deg, #FF6B6B, #C6A75E)"
        size={300}
        bottom="10%"
        left="15%"
        delay={2}
      />

      {/* Grain Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-6"
          >
            <div className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <GradientText variant="blue-violet">Rajakarungan J</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-4"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base sm:text-lg text-gray-500 mb-8 max-w-xl mx-auto md:mx-0"
          >
            I am looking for an opportunity to use my skills and abilities to
            make a positive impact on an IT organisation. I am committed to
            continuous learning and willing to take on new challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/images/Rajakarungan j Resume.pdf";
                link.download = "Rajakarunganj_Resume.pdf";
                link.click();
              }}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center md:justify-end ">
          <ProfileImage src="/images/Rajakarungan1.png" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-gradient-to-b from-[#2563EB] to-[#7C3AED] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
