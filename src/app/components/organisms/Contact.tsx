import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Phone, Send, CheckCircle2, LucideIcon } from "lucide-react";
import { GradientText } from "../atoms/GradientText";
import { HudLabel } from "../atoms/HudLabel";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { toast } from "react-toastify";
import { sendContact, getContactDetails, ContactDetailDto } from "../../common/env.common";
import { useParallax } from "../../hooks/useParallax";
import { SceneFrame } from "../molecules/SceneFrame";

type Status = "idle" | "loading" | "success";

const CONTACT_ICONS: Record<ContactDetailDto["icon"], LucideIcon> = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
};

export function Contact() {
  const parallax = useParallax<HTMLElement>(50);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [contactInfo, setContactInfo] = useState<ContactDetailDto[]>([]);

  useEffect(() => {
    getContactDetails()
      .then(setContactInfo)
      .catch((error) => console.error('Failed to load contact details', error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await sendContact(formData);
      toast.success("Your message sent successfully!");
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch (error) {
      console.error(error);
      toast.error("Server error. Try again later");
      setStatus("idle");
    }
  };

  return (
    <SceneFrame
      id="contact"
      sectionRef={parallax.ref}
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-secondary/30 overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: parallax.y }} aria-hidden="true">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <HudLabel  align="center" className="mb-4">
            Get In Touch
          </HudLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something <GradientText variant="emerald-teal">Amazing</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="px-2 sm:px-0"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-foreground font-display">
              Let's Talk
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = CONTACT_ICONS[info.icon];
                return (
                <motion.a
                  key={info.id}
                  href={info.href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card border border-border rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `color-mix(in srgb, ${info.colorVar} 15%, transparent)` }}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: info.colorVar }}
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-foreground">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
                );
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/5 rounded-2xl border border-primary/15"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse-glow" />
                <h4 className="font-semibold text-sm sm:text-base text-foreground">
                  Currently Available
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Open to freelance projects and full-time opportunities. Typical
                response time: within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative px-2 sm:px-0"
          >
            <div
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl hidden sm:block"
              aria-hidden="true"
            />
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 relative">
              <Input
                label="Your Name"
                value={formData.name}
                onChange={(value) => setFormData({ ...formData, name: value })}
                placeholder="Enter your name"
                required
              />

              <Input
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={(value) => setFormData({ ...formData, email: value })}
                placeholder="Enter your email"
                required
              />

              <Input
                label="Subject"
                value={formData.subject}
                onChange={(value) =>
                  setFormData({ ...formData, subject: value })
                }
                placeholder="Project Inquiry"
                required
              />

              <Input
                label="Message"
                value={formData.message}
                onChange={(value) =>
                  setFormData({ ...formData, message: value })
                }
                placeholder="Tell me about your project..."
                required
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full flex justify-center items-center gap-2"
                disabled={status !== "idle"}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {status === "success" ? (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent
                    </motion.span>
                  ) : status === "loading" ? (
                    <motion.span
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                      Sending...
                    </motion.span>
                  ) : (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      Send Message
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </SceneFrame>
  );
}
