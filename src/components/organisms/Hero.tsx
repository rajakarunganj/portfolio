import { Box, Container, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { CustomButton } from "../atoms/CustomButton";
import { theme } from "../../theme/theme";

const MotionBox = motion(Box);
const MotionAvatar = motion(Avatar);

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 10, md: 0 },
      }}
    >
      {/* Glowing blob 1 */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 200, md: 420 },
          height: { xs: 200, md: 420 },
          background:
            "radial-gradient(circle, rgba(139,92,246,0.38), transparent 65%)",
          top: { xs: -60, md: -120 },
          left: { xs: -50, md: -100 },
          filter: "blur(100px)",
          opacity: 0.75,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Glowing blob 2 */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 240, md: 480 },
          height: { xs: 240, md: 480 },
          background:
            "radial-gradient(circle, rgba(168,85,247,0.32), transparent 65%)",
          bottom: { xs: -60, md: -140 },
          right: { xs: -60, md: -120 },
          filter: "blur(120px)",
          opacity: 0.65,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 8 },
            py: { xs: 4, md: 10 },
          }}
        >
          {/* TEXT SECTION */}
          <MotionBox
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              maxWidth: { md: "55%" },
            }}
          >
            <Typography
              variant="body1"
              color="primary"
              fontWeight={600}
              sx={{
                mb: 2,
                letterSpacing: 1,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              WELCOME TO MY PORTFOLIO
            </Typography>

            <Typography
              variant="h1"
              component="h1"
              sx={{
                mb: 2,
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "4.2rem" },
                lineHeight: 1.2,
              }}
            >
              Hi, I'm{" "}
              <Box
                component="span"
                sx={{
                  background: theme.palette.primary.main,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 800,
                }}
              >
                Rajakarungan J
              </Box>
            </Typography>

            <Typography
              variant="h4"
              color="text.secondary"
              sx={{
                mb: 3,
                fontWeight: 400,
                fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.8rem" },
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: { xs: "100%", md: 520 },
                lineHeight: 1.6,
                fontSize: { xs: "0.95rem", md: "1.1rem" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              I am looking for an opportunity to use my skills and abilities
              to make a positive impact on an IT organisation. I am committed
              to continuous learning and willing to take on new challenges.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: { xs: 2, md: 3 },
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <CustomButton
                variant="contained"
                size="large"
                onClick={() => scrollToSection("projects")}
                sx={{
                  background: theme.palette.primary.main,
                  color: "white",
                  fontWeight: 600,
                  borderRadius: 3,
                  "&:hover": {
                    background: theme.palette.primary.light,
                  },
                }}
              >
                View My Work
              </CustomButton>

              <CustomButton
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("contact")}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  borderRadius: 3,
                }}
              >
                Contact Me
              </CustomButton>
            </Box>
          </MotionBox>

          {/* IMAGE SECTION */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MotionAvatar
              src="/images/Rajakarunganj.png"
              alt="Rajakarungan J"
              whileHover={{ scale: 1.05 }}
              sx={{
                width: { xs: 220, sm: 260, md: 340 },
                height: { xs: 260, sm: 300, md: 400 },
                objectFit: "cover",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
                borderRadius: "16px",
              }}
            />
          </MotionBox>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            zIndex: 3,
          }}
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown size={32} color="#7c3aed" />
        </motion.div>
      </Box>
    </Box>
  );
};
