import React from "react";
import { motion } from "framer-motion";

// icons for free trial, priority access, onboarding support
import { Star, Clock, Headset } from "lucide-react";

const WhyJoinWaitlist = () => {
    const benefits = [
        {
            icon: <Star className="w-6 h-6" />,
            title: "Extended Free Trial",
            description:
                "Get 30 days free (vs. the standard 7) to fully explore JechSpace and its smart booking tools.",
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Priority Access & Influence",
            description:
                "Test new features first and shape JechSpace with your feedback.",
        },
        {
            icon: <Headset className="w-6 h-6" />,
            title: "Exclusive Onboarding Support",
            description:
                "Receive personalized onboarding and training to maximize your team's use of JechSpace.",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-10 lg:mb-10"
            id="why-join"
        >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Join the Waitlist?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Be part of the future of workspace management and get exclusive
                benefits
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WhyJoinWaitlist;
