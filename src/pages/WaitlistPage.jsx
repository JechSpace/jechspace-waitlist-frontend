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
                            The Smarter Way to{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Manage
                            </span>{" "}
                            Your Workspace
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            JechSpace helps organizations map, manage, and
                            optimize office spaces with real-time insights,
                            scheduling, and analytics. Join the waitlist for
                            early access and exclusive launch perks.
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
                            <div className="text-3xl font-bold text-blue-600 mb-2">
                                50+
                            </div>
                            <div className="text-gray-600">Early Adopters</div>
                            <div className="text-sm text-gray-500 mt-1">
                                Already on the waitlist
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border">
                            <div className="text-3xl font-bold text-purple-600 mb-2">
                                Launching Soon
                            </div>
                            <div className="text-gray-600">
                                Get first access as a waitlist member
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                                before the public release
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border">
                            <div className="text-3xl font-bold text-green-600 mb-2">
                                FREE
                            </div>
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
                                    We are preparing for launch soon. Waitlist
                                    members will receive early access before the
                                    public release.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Is joining the waitlist free?
                                </h3>
                                <p className="text-gray-600">
                                    Yes. Joining is completely free.
                                    Organizations that sign up will also receive
                                    one month of free access at launch.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    Who can join the waitlist?
                                </h3>
                                <p className="text-gray-600">
                                    Both organizations and individuals can join.
                                    Organizations will benefit from free access
                                    at launch, while individuals can provide
                                    valuable feedback to help improve JechSpace.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border">
                                <h3 className="font-semibold text-gray-900 mb-2">
                                    What will I receive as a waitlist member?
                                </h3>
                                <p className="text-gray-600">
                                    Early access to JechSpace, exclusive updates
                                    on product development, and special perks
                                    such as early-bird discounts and free access
                                    for organizations.
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
