import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play, Building2, Users, Clock } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    {
      number: "20+",
      label: "Companies",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      number: "95%",
      label: "Satisfaction",
      icon: <Users className="w-5 h-5" />,
    },
    { number: "24/7", label: "Support", icon: <Clock className="w-5 h-5" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Announcement Badge */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              🚀 Transform Your Workspace Management
            </motion.div>
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Transform Your <span className="text-blue-600">Workspace</span>{" "}
              Management
            </motion.h1>
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed"
            >
              A comprehensive solution to optimize your office space, improve
              productivity, and enhance the workplace experience with smart
              management tools.
            </motion.p>{" "}
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  onClick={() => navigate("/waitlist")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-gray-200 hover:border-blue-200 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-300"
                  onClick={() => {
                    const dashboardSection =
                      document.querySelector("#dashboard");
                    if (dashboardSection) {
                      dashboardSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Play className="mr-2 w-5 h-5" />
                  View Dashboard
                </Button>
              </motion.div>
            </motion.div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-blue-600">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      JechSpace Dashboard
                    </h3>
                    <p className="text-sm text-gray-500">Workspace Overview</p>
                  </div>
                </div>
                <div className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  Live
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">1,254</div>
                  <div className="text-sm text-blue-600">Total Users</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">45</div>
                  <div className="text-sm text-green-600">Active Bookings</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">540</div>
                  <div className="text-sm text-purple-600">Total Spaces</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">
                    2.3 hrs
                  </div>
                  <div className="text-sm text-orange-600">Avg. Usage</div>
                </div>
              </div>

              {/* Activity List */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-900 mb-3">
                  Recent Activities
                </div>
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">
                        New user registered
                      </div>
                      <div className="text-xs text-gray-500">
                        John Doe created an account
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">2 hours ago</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg"
            >
              <div className="text-xs font-medium">95% Uptime</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-xl shadow-lg"
            >
              <div className="text-xs font-medium">Real-time Sync</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;
