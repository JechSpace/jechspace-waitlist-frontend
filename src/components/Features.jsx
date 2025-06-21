import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  BarChart3,
  Shield,
  Smartphone,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Smart Space Management",
      description:
        "Optimize office layouts with intelligent space allocation and real-time occupancy tracking.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Booking & Reservations",
      description:
        "Seamlessly book meeting rooms, desks, and equipment with our intuitive reservation system.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description:
        "Foster teamwork with integrated communication tools and collaborative workspace planning.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Insights",
      description:
        "Make data-driven decisions with comprehensive workspace utilization analytics and reports.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Interactive Floor Plans",
      description:
        "Navigate your workspace with interactive maps and real-time space availability.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Ready",
      description:
        "Access all features on-the-go with our responsive mobile application.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="text-blue-600">Modern Workspaces</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your office management with intelligent tools designed for
            productivity, efficiency, and seamless collaboration.
          </p>
        </motion.div>
        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  {" "}
                  <motion.div
                    className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>{" "}
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Workspace?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Join thousands of companies already optimizing their office spaces
              with JechSpace.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg"
              onClick={() => {
                const waitlistSection = document.getElementById("waitlist");
                if (waitlistSection) {
                  waitlistSection.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/waitlist";
                }
              }}
            >
              {" "}
              Get Early Access
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
