import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 25 employees",
        "Basic space management",
        "Meeting room booking",
        "Mobile app access",
        "Email support",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing companies",
      monthlyPrice: 79,
      annualPrice: 65,
      features: [
        "Up to 100 employees",
        "Advanced space optimization",
        "Resource management",
        "Interactive floor plans",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: 149,
      annualPrice: 125,
      features: [
        "Unlimited employees",
        "Multi-location support",
        "Custom workflows",
        "Advanced security",
        "Dedicated support",
        "Custom reporting",
        "SSO integration",
        "White-label options",
      ],
      popular: false,
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
    <section className="py-20 bg-gray-50">
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
            Simple, Transparent <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your organization's needs. Start your free
            trial today.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className={`text-lg ${
                !isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <motion.button
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setIsAnnual(!isAnnual)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <span
              className={`text-lg ${
                isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
              }`}
            >
              Annual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                Save 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`h-full border-2 transition-all duration-300 ${
                  plan.popular
                    ? "border-blue-600 shadow-xl"
                    : "border-gray-200 hover:border-blue-200 shadow-lg hover:shadow-xl"
                }`}
              >
                <CardHeader className="text-center p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-gray-500 mt-1">
                        Billed annually
                      </p>
                    )}
                  </div>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200"
                    } font-semibold py-3 rounded-lg transition-all duration-300`}
                    onClick={() => {
                      const waitlistSection =
                        document.getElementById("waitlist");
                      if (waitlistSection) {
                        waitlistSection.scrollIntoView({ behavior: "smooth" });
                      } else {
                        window.location.href = "/waitlist";
                      }
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardHeader>

                <CardContent className="p-8 pt-0">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We offer custom enterprise solutions for organizations with
              specific requirements. Contact our sales team to discuss your
              needs.
            </p>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
