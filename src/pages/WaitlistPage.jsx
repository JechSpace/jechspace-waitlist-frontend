import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import WaitlistFooter from "../components/WaitlistFooter";
import WaitlistForm from "../components/WaitlistForm";
import WhyJoinWaitlist from "../components/WhyJoinWaitlist";
import FAQSection from "../components/FAQSection";

const WaitlistPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
            <Navbar />

            {/* Main Content */}
            <main className="pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Page Header */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20 lg:mb-28">
                        {/* Left Column - Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                The Smarter Way to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Manage
                                </span>{" "}
                                Your Workspace
                            </h1>
                            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                JechSpace helps organizations map, manage, and
                                optimize office spaces with real-time insights,
                                scheduling, and analytics. Join the waitlist for
                                early access and exclusive launch perks.
                            </p>
                            <div className="pt-4">
                                <button
                                    onClick={() => {
                                        document
                                            .getElementById("waitlist-form")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}
                                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
                                >
                                    Join Waitlist
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Column - Dashboard Preview */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center order-1 lg:order-2"
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
                            <div className="relative bg-white/95 p-4 sm:p-5 lg:p-6 rounded-2xl shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 w-full max-w-lg">
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
                                        <div className="text-lg font-bold text-blue-600">
                                            1,254
                                        </div>
                                        <div className="text-xs text-blue-600">
                                            Total Users
                                        </div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg">
                                        <div className="text-lg font-bold text-green-600">
                                            45
                                        </div>
                                        <div className="text-xs text-green-600">
                                            Active Bookings
                                        </div>
                                    </div>
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <div className="text-lg font-bold text-purple-600">
                                            540
                                        </div>
                                        <div className="text-xs text-purple-600">
                                            Total Spaces
                                        </div>
                                    </div>
                                    <div className="bg-orange-50 p-3 rounded-lg">
                                        <div className="text-lg font-bold text-orange-600">
                                            2.3 hrs
                                        </div>
                                        <div className="text-xs text-orange-600">
                                            Avg. Usage
                                        </div>
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
                                            <div className="text-xs text-gray-400">
                                                2h ago
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Why Join Waitlist Section */}
                    <WhyJoinWaitlist />

                    {/* Waitlist Form */}
                    <div
                        id="waitlist-form"
                        className="relative py-10 sm:py-10 lg:py-16 -mx-4 sm:-mx-6 lg:-mx-8"
                    >
                        {/* Content container */}
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                            {/* Section Header */}
                            <div className="text-center mb-12 lg:mb-16">
                                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                    Ready to Get Started?
                                </h2>
                                <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
                                    Join our waitlist today and be among the
                                    first to transform your workspace management
                                    experience.
                                </p>
                            </div>

                            <WaitlistForm />
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <FAQSection />
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
