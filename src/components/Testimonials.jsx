import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechFlow Inc.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b787?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote:
        "JechSpace transformed how we manage our office. The booking system is intuitive and the analytics help us optimize our space utilization by 40%.",
    },
    {
      name: "Michael Chen",
      role: "Facilities Director",
      company: "Innovation Labs",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote:
        "The real-time space tracking and automated reporting save us hours every week. Our employees love the mobile app for booking meeting rooms on the go.",
    },
    {
      name: "Emily Rodriguez",
      role: "HR Manager",
      company: "Global Dynamics",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote:
        "Implementation was seamless and the support team was incredible. We saw immediate improvements in workspace efficiency and employee satisfaction.",
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "StartupHub",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote:
        "As a growing startup, JechSpace scales with us perfectly. The insights we get help us make data-driven decisions about our office space needs.",
    },
    {
      name: "Lisa Thompson",
      role: "Office Manager",
      company: "Creative Solutions",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote:
        "The interactive floor plans and resource management features make my job so much easier. Highly recommend to any organization looking to optimize their workspace.",
    },
    {
      name: "James Wilson",
      role: "VP Operations",
      company: "Enterprise Corp",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      quote:
        "JechSpace delivered on all its promises. The ROI was evident within the first month, and our workspace utilization has never been more efficient.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what industry leaders are
            saying about JechSpace.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-blue-100">
                  <Quote className="w-8 h-8" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      {" "}
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="w-full h-full bg-blue-600 text-white items-center justify-center font-semibold text-lg hidden">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Trusted by Companies Worldwide
              </h3>
              <p className="text-blue-100 text-lg">
                Join thousands of organizations already optimizing their
                workspaces
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-200">Companies</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-200">Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-200">Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-200">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
