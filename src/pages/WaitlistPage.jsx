import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import WaitlistFooter from "../components/WaitlistFooter";
import WaitlistForm from "../components/WaitlistForm";

const WaitlistPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Navbar />

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join the{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                JechSpace
              </span>{" "}
              Waitlist
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be among the first to experience the future of digital innovation.
              Join our exclusive waitlist and get early access to something
              extraordinary.
            </p>
          </motion.div>

          {/* Waitlist Form */}
          <WaitlistForm />

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Early Adopters</div>
              <div className="text-sm text-gray-500 mt-1">
                Already on the waitlist
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                Q3 2025
              </div>
              <div className="text-gray-600">Expected Launch</div>
              <div className="text-sm text-gray-500 mt-1">
                First access for waitlist members
              </div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border">
              <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
              <div className="text-gray-600">Early Access</div>
              <div className="text-sm text-gray-500 mt-1">
                No cost for waitlist members
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">
                  When will JechSpace launch?
                </h3>
                <p className="text-gray-600">
                  We're planning to launch in Q3 2025. Waitlist members will get
                  early access before the public launch.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is joining the waitlist free?
                </h3>
                <p className="text-gray-600">
                  Yes, joining our waitlist is completely free. You'll also
                  receive exclusive early access at no additional cost.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What will I receive as a waitlist member?
                </h3>
                <p className="text-gray-600">
                  You'll get early access to JechSpace, exclusive updates on our
                  development progress, and special member-only perks and
                  discounts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl"
        />
      </div>

      <WaitlistFooter />
    </div>
  );
};

export default WaitlistPage;
