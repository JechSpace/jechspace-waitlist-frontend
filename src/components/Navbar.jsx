import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Menu, X, Building2 } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Set scrolled state
      setIsScrolled(scrollTop > 50);

      // Hide navbar when approaching footer (within 200px of bottom)
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      setHideNavbar(distanceFromBottom < 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Testimonials", href: "#testimonials" },
  ];
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
            {/* Logo */}{" "}
            <motion.div
              className="flex-shrink-0 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate("/")}
            >
              <img
                src="/logo-blue.png"
                alt="JechSpace Logo"
                className="h-8 w-auto sm:h-10 md:h-12 object-contain"
              />
            </motion.div>{" "}
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>{" "}
            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => navigate("/waitlist")}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-[30px]"
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              {" "}
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ))}{" "}
                <div className="pt-4 pb-2">
                  <Button
                    onClick={() => {
                      navigate("/waitlist");
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-[30px]"
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>{" "}
            </motion.div>
          )}
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
