import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
    const [openItem, setOpenItem] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "When will JechSpace launch?",
            answer: "We are preparing for launch soon. Waitlist members will receive early access before the public release.",
        },
        {
            id: 2,
            question: "Is joining the waitlist free?",
            answer: "Yes. Joining is completely free. Organizations that sign up will also receive one month of free access at launch.",
        },
        {
            id: 3,
            question: "Who can join the waitlist?",
            answer: "Both organizations and individuals can join. Organizations will benefit from free access at launch, while individuals can provide valuable feedback to help improve JechSpace.",
        },
        {
            id: 4,
            question: "What will I receive as a waitlist member?",
            answer: "Early access to JechSpace, exclusive updates on product development, and special perks such as early-bird discounts and free access for organizations.",
        },
    ];

    const toggleItem = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
        >
            <h2 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8 lg:mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">
                {faqData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none  group"
                        >
                            <h3 className="font-semibold text-gray-900 text-md pr-4 group-hover:text-blue-700 transition-colors duration-200">
                                {item.question}
                            </h3>
                            <motion.div
                                className="flex-shrink-0"
                                animate={{
                                    rotate: openItem === item.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openItem === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: [0.04, 0.62, 0.23, 0.98],
                                        opacity: { duration: 0.3 },
                                    }}
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        initial={{ y: -10 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: -10 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1,
                                        }}
                                        className="px-6 pb-6 pt-2 border-t border-gray-100"
                                    >
                                        <p className="text-gray-600 text-sm">
                                            {item.answer}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Additional help section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 text-center"
            >
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <a
                    href="mailto:jechspace@gmail.com"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    Contact Support
                </a>
            </motion.div>
        </motion.div>
    );
};

export default FAQSection;
