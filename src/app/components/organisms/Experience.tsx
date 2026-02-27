import { motion } from "motion/react";
import { GradientText } from "../atoms/GradientText";
import { TimelineItem } from "../molecules/TimelineItem";

export function Experience() {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Junior Full-Stack Developer",
      company: "My Soaring",
      description:
        "We are a product-based software company passionate about building digital platforms that empower organizations. Our solutions simplify complex workflows, automate processes, and unlock new opportunities for growth.",
      color: "#2563EB",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#2563EB]/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-[#FF6B6B]/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <GradientText variant="blue-violet">Experience</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey and career progression over the year
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} delay={index * 0.15} />
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-semibold text-center mb-10 text-gray-900">
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#F8F9FB] to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">12th</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Higher Secondary
              </h4>
              <p className="text-[#2563EB] font-medium mb-2">
                Computer Science
              </p>
              <p className="text-gray-600 mb-3">Rc hr sec school</p>
              <p className="text-sm text-gray-500">
                2019 - 2020 • Percentage: 70/100
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F9FB] to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-[#059669] to-[#06B6D4] rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-xl">BS</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">
                Bachelore Of Engineering{" "}
              </h4>
              <p className="text-[#059669] font-medium mb-2">
                Computer Science And Engineering
              </p>
              <p className="text-gray-600 mb-3">
                Gnanamani College of Technology
              </p>
              <p className="text-sm text-gray-500">
                2020 - 2024 • GPA: 7.73/10
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
