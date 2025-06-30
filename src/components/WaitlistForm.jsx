import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useWaitlist } from "../hooks/useWaitlist";
import { validateWaitlistForm } from "../utils/validation";
import {
  CheckCircle,
  AlertCircle,
  Loader2,
  Users,
  Bell,
  Gift,
} from "lucide-react";

const WaitlistForm = () => {
  const [customerType, setCustomerType] = useState("user"); // "user" or "organisation"
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interests: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const { isLoading, isSubmitted, error, submitWaitlist, resetForm } =
    useWaitlist();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    const validation = validateWaitlistForm(formData, customerType);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    // Submit form with customer type
    const result = await submitWaitlist({ ...formData, customerType });
    if (result.success) {
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        interests: "",
      });
    } else if (result.errors) {
      setFormErrors(result.errors);
    }
  };

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Early Access",
      description: "Be among the first to try JechSpace before public launch",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Exclusive Updates",
      description: "Get insider news and development updates",
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Special Perks",
      description: "Exclusive discounts and early-bird pricing",
    },
  ];

  if (isSubmitted || showSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-green-800">
              Welcome to the Waitlist!
            </CardTitle>
            <CardDescription className="text-green-600">
              Thank you for joining JechSpace. We'll notify you as soon as we
              launch!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-3 text-sm text-green-700">
              <p>✨ You're now part of our exclusive early access program</p>
              <p>📧 Check your email for a confirmation message</p>
              <p>🎉 Follow us on social media for updates</p>
            </div>
            <Button
              variant="outline"
              className="mt-6 border-green-300 text-green-700 hover:bg-green-100"
              onClick={() => {
                setShowSuccess(false);
                resetForm();
              }}
            >
              Join Another Person
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join the Revolution
          </h3>
          <p className="text-gray-600 text-lg">
            Be part of something extraordinary. Get exclusive early access to
            JechSpace and help shape the future of digital experiences.
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>20+</strong> people have already joined our waitlist. Don't
            miss out!
          </p>
        </div>
      </motion.div>

      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Join the Waitlist
            </CardTitle>
            <CardDescription className="text-center">
              Get early access to JechSpace and be the first to experience the
              future
            </CardDescription>
          </CardHeader>{" "}
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Customer Type Toggle */}
              <div className="flex items-center justify-center mb-6">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setCustomerType("user")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      customerType === "user"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomerType("organisation")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      customerType === "organisation"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Organisation
                  </button>
                </div>
              </div>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={formErrors.firstName ? "border-red-500" : ""}
                  />
                  {formErrors.firstName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {formErrors.firstName}
                    </motion.p>
                  )}
                </div>
                <div>
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={formErrors.lastName ? "border-red-500" : ""}
                  />
                  {formErrors.lastName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {formErrors.lastName}
                    </motion.p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formErrors.email ? "border-red-500" : ""}
                />
                {formErrors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {formErrors.email}
                  </motion.p>
                )}
              </div>
              {/* Phone (Optional) */}
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={formErrors.phone ? "border-red-500" : ""}
                />
                {formErrors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {formErrors.phone}
                  </motion.p>
                )}{" "}
              </div>

              {/* Company/Organisation - Only show for organisations */}
              {customerType === "organisation" && (
                <div>
                  <Input
                    name="company"
                    placeholder="Company/Organization *"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={formErrors.company ? "border-red-500" : ""}
                  />
                  {formErrors.company && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {formErrors.company}
                    </motion.p>
                  )}
                </div>
              )}

              {/* Interests (Optional) */}
              <div>
                <textarea
                  name="interests"
                  placeholder="What interests you most about JechSpace? (Optional)"
                  value={formData.interests}
                  onChange={handleInputChange}
                  rows={3}
                  className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>
              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md"
                  >
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center">
                By joining our waitlist, you agree to receive updates about
                JechSpace. We respect your privacy and you can unsubscribe at
                any time.
              </p>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;
