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
                onClick={() =>
                  document.getElementById("waitlist-form")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
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
              className="order-1 lg:order-2 relative hidden lg:block"
            >
              {/* Decorative blur elements */}
              {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" /> */}

              {/* Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-[500px] mx-auto">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-blue-50/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <BarChart3 size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        JechSpace Dashboard
                      </p>
                      <p className="text-xs text-gray-500">
                        Workspace Overview
                      </p>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100/80 text-green-700 text-xs font-semibold rounded-full">
                    Live
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Total Users", value: "1,254" },
                      { label: "Active Bookings", value: "45" },
                      { label: "Total Spaces", value: "540" },
                      { label: "Avg. Usage", value: "2.3 hrs" },
                    ].map((stat, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-gray-50">
                        <p className="text-lg font-bold text-gray-900 mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-900 mb-4">
                      Recent Activity
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          user: "Sarah Johnson",
                          action: "booked Conference Room A",
                          time: "2 mins ago",
                        },
                        {
                          user: "Alex Chen",
                          action: "created new workspace",
                          time: "15 mins ago",
                        },
                      ].map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {activity.user}
                            </p>
                            <p className="text-xs text-gray-500">
                              {activity.action}
                            </p>
                          </div>
                          <p className="text-xs text-gray-400 flex-shrink-0">
                            {activity.time}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
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
      <section
        id="faq-section"
        className="py-12 px-4 sm:px-6 lg:px-12 mb-5"
      >
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
