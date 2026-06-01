import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GradientText } from "../atoms/GradientText";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(" Your message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(data.message || "❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Server error. Try again later");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajakarunganj@gmail.com",
      color: "#2563EB",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8220782385",
      href: "tel:+918220782385",
      color: "#059669",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, TamilNadu, India",
      href: "#",
      color: "#7C3AED",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#F8F9FB] to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#2563EB]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#7C3AED]/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <GradientText variant="emerald-teal">Touch</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
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
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-900">
              Let's Talk
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out
              through any of the channels below.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-2xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <info.icon
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: info.color }}
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 mb-0.5">
                      {info.label}
                    </p>
                    <p className="text-sm sm:text-base font-medium text-gray-900">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-br from-[#2563EB]/5 to-[#7C3AED]/5 rounded-2xl border border-[#2563EB]/10"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#059669] rounded-full animate-pulse" />
                <h4 className="font-semibold text-sm sm:text-base text-gray-900">
                  Currently Available
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
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
            className="px-2 sm:px-0"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                rows={4} // fewer rows for mobile
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full flex justify-center items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
