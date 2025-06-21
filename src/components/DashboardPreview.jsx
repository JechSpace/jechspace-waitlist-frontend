import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { BarChart3, Users, Calendar, MapPin } from "lucide-react";

const DashboardPreview = () => {
  const features = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analytics Overview",
      description: "Real-time insights into space utilization and trends",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "User Management",
      description: "Manage team members and access permissions",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Booking System",
      description: "Streamlined reservations for rooms and desks",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Interactive Maps",
      description: "Visual floor plans with real-time availability",
    },
  ];

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
            Powerful <span className="text-blue-600">Admin Dashboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a complete overview of your workspace with our intuitive and
            feature-rich admin dashboard designed for maximum efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Dashboard Image */}
            <div className="relative">
              <motion.img
                src="/DashboardPreview.png"
                alt="JechSpace Dashboard Preview"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              {/* Overlay elements for visual appeal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-48"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">
                  Customer Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Everything You Need in One Place
              </h3>
            </div>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              {" "}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ready to Get Early Access?
                </h4>
                <p className="text-gray-600 mb-4">
                  Join our waitlist to be among the first to experience
                  JechSpace's revolutionary workspace management platform.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300"
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
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
