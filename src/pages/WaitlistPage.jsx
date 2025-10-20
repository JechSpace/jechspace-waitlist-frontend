import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import {
  Check,
  ArrowRight,
  Zap,
  Building,
  Building2,
  BarChart3,
  MapPin,
  FolderOpen,
} from "lucide-react";
import Navbar from "../components/Navbar";
import WaitlistForm from "../components/WaitlistForm";
import WhyJoinWaitlist from "../components/WhyJoinWaitlist";
import FAQSection from "../components/FAQSection";
import WaitlistFooter from "../components/WaitlistFooter";
import { trackCTAClick } from "../utils/analytics";

const WaitlistPage = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    document.title = "JechSpace - The Smarter Workspace Management Platform";
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["manage your workspace", "find and book workspaces"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section - Headline Left, Content Right */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Headline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The smarter way to{" "}
                <span
                  ref={typedElement}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </h1>

              <p className="text-base sm:text-base lg:text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're booking your next workspace or managing multiple
                office locations, Jechspace makes it effortless. No double
                bookings. No stress. No spreadsheets.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackCTAClick("hero"); // Track before scrolling
                  document.getElementById("waitlist-form")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              >
                Join the Waitlist
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Right - Dashboard Preview (Hidden on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[480px] order-2 lg:order-2 hidden sm:block pointer-none:"
            >
              {/* Clean background grid pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-blue-50/50 rounded-2xl"></div>
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: `
                                            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
                                        `,
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>

              {/* Subtle accent elements */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60"></div>
              <div className="absolute top-1/3 left-4 w-1 h-8 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full"></div>
              <div className="absolute bottom-1/3 right-4 w-1 h-6 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full"></div>

              {/* Main dashboard container */}
              <div className="relative bg-white/95 p-4 sm:p-5 lg:p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 w-full max-w-lg mx-auto pointer-none">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        JechSpace Dashboard
                      </h3>
                      <p className="text-xs text-gray-500">
                        Workspace Overview
                      </p>
                    </div>
                  </div>
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                    Live
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">1,254</div>
                    <div className="text-xs text-blue-600">Total Users</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600">45</div>
                    <div className="text-xs text-green-600">
                      Active Bookings
                    </div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-purple-600">540</div>
                    <div className="text-xs text-purple-600">Total Spaces</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-orange-600">
                      2.3 hrs
                    </div>
                    <div className="text-xs text-orange-600">Avg. Usage</div>
                  </div>
                </div>

                {/* Activity List */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-gray-900 mb-2">
                    Recent Activities
                  </div>
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg"
                    >
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-900">
                          New user registered
                        </div>
                        <div className="text-xs text-gray-500">
                          John Doe created account
                        </div>
                      </div>
                      <div className="text-xs text-gray-400">2h ago</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose JechSpace - Segmented by User Type */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose JechSpace for Workspace Management
            </h2>
            <p className="text-base text-gray-600">
              Designed for both individuals and organizations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Freelancers & Small Teams */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Freelancers & Small Teams
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <Zap
                        size={20}
                        className="text-blue-600 flex-shrink-0 mt-1"
                      />
                    ),
                    title: "Find Affordable Workspaces Near You",
                    description:
                      "Our intelligent workspace finder helps you search for and discover affordable workspaces near you in seconds. Filter by price, amenities, location, and vibe—whatever matters to your productivity.",
                  },
                  {
                    icon: (
                      <Check
                        size={20}
                        className="text-blue-600 flex-shrink-0 mt-1"
                      />
                    ),
                    title: "Zero Booking Drama",
                    description:
                      "Say goodbye to double bookings and scheduling conflicts. Our intelligent conflict resolution system ensures that once you book an office space or meeting room, it's yours.",
                  },
                  {
                    icon: (
                      <FolderOpen
                        size={20}
                        className="text-blue-600 flex-shrink-0 mt-1"
                      />
                    ),
                    title: "Stay Organized",
                    description:
                      "Keep all your workspace bookings, schedules, and reservations organized in one intuitive dashboard. Access your booking history anytime, anywhere.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-blue-200 bg-blue-50/50"
                  >
                    <div className="flex items-start gap-3">
                      {item.icon}
                      <div>
                        <h3 className="font-semibold text-base text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Organizations */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <Building size={24} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  For Organizations
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <Building2
                        size={24}
                        className="text-purple-600 flex-shrink-0 mt-1"
                      />
                    ),
                    title: "Manage Multiple Locations Effortlessly",
                    description:
                      "The ultimate booking software for managing multiple spaces and locations from a single dashboard. Get real-time visibility into room availability, active bookings, and space utilization.",
                  },
                  {
                    icon: (
                      <Zap
                        size={24}
                        className="text-purple-600 flex-shrink-0 mt-1"
                      />
                    ),
                    title: "Say Goodbye to Spreadsheets",
                    description:
                      "Stop wasting hours on manual check-ins and Excel spreadsheets. JechSpace automates your entire booking workflow—from space requests to attendee check-in to conflict resolution.",
                  },
                  {
                    icon: (
                      <BarChart3
                        size={24}
                        className="text-purple-600 flex-shrink-0 mt-1"
                      />
                    ),
                    title: "Analytics That Actually Help",
                    description:
                      "Gain powerful insights into your workspace utilization with advanced location analytics. Understand which spaces are in demand and optimize for maximum efficiency.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-purple-200 bg-purple-50/50 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      {item.icon}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section
        id="waitlist-form"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/30 to-white mb-5"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base text-gray-600">
              Join our waitlist and be among the first to transform your
              workspace management experience.
            </p>
          </motion.div>

          <WaitlistForm />
        </div>
      </section>

      {/* Why Join Waitlist Section */}
      <section
        id="why-join-waitlist"
        className="py-12 px-4 sm:px-6 lg:px-12 mb-5"
      >
        <div className="max-w-7xl mx-auto">
          <WhyJoinWaitlist />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="py-12 px-4 sm:px-6 lg:px-12 mb-5">
        <div className="max-w-2xl mx-auto">
          <FAQSection />
        </div>
      </section>

      {/* Footer section */}
      <WaitlistFooter />
    </div>
  );
};

export default WaitlistPage;
