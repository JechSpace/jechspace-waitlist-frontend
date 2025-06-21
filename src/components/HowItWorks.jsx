import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import {
  UserPlus,
  LayoutDashboard,
  CalendarCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: <UserPlus className="w-8 h-8" />,
      title: "Sign Up & Setup",
      description:
        "Create your account and configure your workspace settings in minutes. Our guided setup makes it easy to get started.",
    },
    {
      step: "02",
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Design Your Space",
      description:
        "Upload floor plans and define your office layout with our intuitive drag-and-drop interface.",
    },
    {
      step: "03",
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Start Booking",
      description:
        "Enable your team to book desks, meeting rooms, and resources with real-time availability.",
    },
    {
      step: "04",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Optimize & Analyze",
      description:
        "Use insights and analytics to optimize space utilization and improve workplace efficiency.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How <span className="text-blue-600">JechSpace</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running with workspace management in four simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-blue-100 z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-full bg-blue-600 origin-left"
                  />
                </div>
              )}

              <Card className="relative z-10 border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="text-4xl font-bold text-blue-100 mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join our waitlist and be among the first to experience the future
              of workspace management.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg inline-flex items-center gap-2"
              onClick={() => {
                const waitlistSection = document.getElementById("waitlist");
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/waitlist";
                }
              }}
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
