import React from "react";
import { motion } from "framer-motion";

const WhyJoinWaitlist = () => {
    const benefits = [
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
            ),
            title: "Early Access for Organizations",
            description:
                "Organizations that join the waitlist will receive one month of free access when we launch.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
            ),
            title: "Shape the Future",
            description:
                "Whether you're an individual or part of a team, your feedback will help us refine JechSpace to serve real workplace needs.",
        },
        {
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
            ),
            title: "Exclusive Updates",
            description:
                "Get insider news, product previews, and behind-the-scenes updates on our development journey.",
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
