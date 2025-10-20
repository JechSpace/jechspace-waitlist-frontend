import React from "react";
import { motion } from "framer-motion";

// icons for free trial, priority access, onboarding support
import { Star, Clock, Headset } from "lucide-react";

const WhyJoinWaitlist = () => {
    const benefits = [
        {
            icon: <Star size={20} />,
            title: "Extended Free Trial",
            description:
                "Get 30 days free (vs. the standard 7) to fully explore JechSpace and its smart booking tools.",
        },
        {
            icon: <Clock size={20} />,
            title: "Priority Access & Influence",
            description:
                "Test new features first and shape JechSpace with your feedback.",
        },
        {
            icon: <Headset size={20} />,
            title: "Exclusive Onboarding Support",
            description:
                "Receive personalized onboarding and training to maximize your team's use of JechSpace.",
        },
    ];

    return (
        <div className="text-center" id="why-join">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Why Join the Waitlist?
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto mb-10">
                Be part of the future of workspace management and get exclusive
                benefits
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                            {benefit.icon}
                        </div>
                        <h3 className="text-base font-semibold text-gray-900 mb-2">
                            {benefit.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyJoinWaitlist;
