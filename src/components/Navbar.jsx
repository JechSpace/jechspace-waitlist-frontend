import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsScrolled(scrollTop > 50);

      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
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
        hideNavbar ? "transform -translate-y-full" : "transform translate-y-0"
      }`}
    >
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: hideNavbar ? 0 : 1,
          y: 0,
          width: isScrolled ? "95%" : "100%",
          marginTop: isScrolled ? "18px" : "0px",
          borderRadius: isScrolled ? "30px" : "0px",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm ${
          isScrolled ? "max-w-6xl" : "w-full"
        }`}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToForm}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-[30px] text-sm sm:text-base px-4 py-2 sm:px-6"
              >
                Join Waitlist
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
