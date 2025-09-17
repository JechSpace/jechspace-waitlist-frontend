import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [hideNavbar, setHideNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            const distanceFromBottom =
                documentHeight - (scrollTop + windowHeight);
            setHideNavbar(distanceFromBottom < 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToForm = () => {
        const formElement = document.getElementById("waitlist-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`fixed top-0 w-full z-50 flex justify-center transition-transform duration-300 ${
                hideNavbar
                    ? "transform -translate-y-full"
                    : "transform translate-y-0"
            }`}
        >
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: hideNavbar ? 0 : 1,
                    y: 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="bg-white/60 backdrop-blur-lg border border-gray-100 shadow-lg rounded-[30px] max-w-6xl mt-[10px]"
                style={{ width: "95%" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <motion.div
                            className="flex-shrink-0 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src="/logo-blue.png"
                                alt="JechSpace Logo"
                                className="h-8 w-auto sm:h-10 md:h-12 object-contain"
                            />
                        </motion.div>

                        {/* CTA Button - Show on all screen sizes */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button
                                onClick={scrollToForm}
                                className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-[32px] hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-101 shadow-lg hover:shadow-xl text-sm sm:text-base"
                            >
                                Join Waitlist
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.nav>
        </div>
    );
};

export default Navbar;
