import React from "react";
import { motion } from "framer-motion";
import { Heart, Mail, Twitter, Instagram, Linkedin } from "lucide-react";

const WaitlistFooter = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/jechspace",
      target: "_blank",
      rel: "noopener noreferrer",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/company/jechspace",
      target: "_blank",
      rel: "noopener noreferrer",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/jechspace",
      target: "_blank",
      rel: "noopener noreferrer",
      label: "Instagram",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo */}
            <div className="flex justify-center items-center gap-3 mb-6">
              <img
                src="/logo-blue.png"
                alt="JechSpace Logo"
                className="h-20 w-auto filter brightness-0 invert"
              />
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              JechSpace is building a comprehensive digital workspace management platform designed to optimize office space, improve productivity, and enhance workplace experience. Join today and be part of shaping the future of work.
            </p>

            {/* Social Links */}
            <div className="flex justify-center items-center gap-6 mb-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.target}
                  rel={link.rel}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Contact */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm">
                Have questions? Reach out to us{" "}
                <a
                  href="mailto:jechspace@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  via email
                </a>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2025 JechSpace. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by JechSpace Team.</span>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default WaitlistFooter;
