import React, { useState, useEffect } from "react";
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
import { waitlistStorage } from "../utils/waitlistStorage";
import {
    CheckCircle,
    AlertCircle,
    Loader2,
    Users,
    Workflow,
    Bell,
    Gift,
    Twitter,
    Linkedin,
    Instagram,
} from "lucide-react";

const WaitlistForm = () => {
    const [customerType, setCustomerType] = useState("user");
    const [formData, setFormData] = useState({
        email: "",
        company: "",
        interests: "",
    });
    const [formErrors, setFormErrors] = useState({});
    const [showSuccess, setShowSuccess] = useState(false);
    const [hasJoinedBefore, setHasJoinedBefore] = useState(false);

    const { isLoading, isSubmitted, error, submitWaitlist, resetForm } =
        useWaitlist();

    // Check if user has joined before on component mount
    useEffect(() => {
        const previousSubmission = waitlistStorage.hasJoined();
        if (previousSubmission) {
            setHasJoinedBefore(true);
            setShowSuccess(true);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (formErrors[name]) {
            setFormErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (hasJoinedBefore) {
            // Don't allow resubmission if they've already joined
            return;
        }

        const validation = validateWaitlistForm(formData, customerType);
        if (!validation.isValid) {
            setFormErrors(validation.errors);
            return;
        }

        const result = await submitWaitlist({
            email: formData.email,
            customerType: customerType,
            company: formData.company,
            interests: formData.interests,
        });

        if (result.success) {
            // Only show success for status 200 (new submission)
            if (
                result.data?.status === "success" &&
                !result.data?.message?.includes("already on waitlist")
            ) {
                // Store the successful submission in localStorage
                waitlistStorage.setJoined({
                    email: formData.email,
                    customerType: customerType,
                    messageShown:
                        result.data.message || "Successfully joined waitlist",
                });

                setHasJoinedBefore(true);
                setShowSuccess(true);
                setFormData({
                    email: "",
                    company: "",
                    interests: "",
                });
            } else {
                // User already on waitlist - show error message
                setFormErrors({ email: "Email is already on our waitlist" });
            }
        } else if (result.error) {
            setFormErrors({ email: result.error });
        }
    };

    const benefits = [
        {
            icon: <Users className="w-5 h-5" />,
            title: "Early Access for Organizations",
            description:
                "Organizations that join the waitlist will receive one month of free access when we launch.",
        },
        {
            icon: <Workflow className="w-5 h-5" />,
            title: "Contribute to the Future of Workspace Management",
            description:
                "Whether you’re an individual or part of a team, your feedback will help us refine JechSpace to serve real workplace needs.",
        },
        {
            icon: <Bell className="w-5 h-5" />,
            title: "Exclusive Updates",
            description:
                "Get insider news, product previews, and behind-the-scenes updates on our development journey.",
        },
    ];

    if (isSubmitted || showSuccess) {
        return (
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-6 p-8 bg-white rounded-2xl shadow-xl border border-gray-100"
                >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {hasJoinedBefore
                                ? "Welcome Back!"
                                : "Successfully Joined!"}
                        </h2>

                        <p className="text-lg text-gray-600 max-w-md mx-auto">
                            {hasJoinedBefore
                                ? "You're already on our waitlist. We'll notify you as soon as JechSpace is available!"
                                : "Thank you for joining our waitlist. We'll notify you as soon as JechSpace is available!"}
                        </p>

                        {hasJoinedBefore && (
                            <p className="text-sm text-gray-500">
                                Submitted on your device previously. You don't
                                need to join again.
                            </p>
                        )}
                    </div>

                    <div className="space-y-4">
                        <p className="text-gray-600">Stay connected with us:</p>
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://x.com/jechspace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/jechspace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.instagram.com/jechspace"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-700 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {hasJoinedBefore && (
                        <button
                            onClick={() => {
                                waitlistStorage.clear();
                                setHasJoinedBefore(false);
                                setShowSuccess(false);
                                setFormData({
                                    email: "",
                                    company: "",
                                    interests: "",
                                });
                            }}
                            className="text-sm text-gray-500 hover:text-gray-700 underline transition-colors"
                        >
                            Join with different email
                        </button>
                    )}
                </motion.div>
            </div>
        );
    }

    return (
        <div
            id="waitlist-form"
            className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 items-start"
        >
            {/* Benefits Section */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Why Join the Waitlist?
                    </h3>
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
                                <p className="text-gray-600 text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                        <strong>50+</strong> people have already joined our
                        waitlist. Don't miss out!
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
                            Get early access to JechSpace and be the first to
                            experience the future
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
                                        onClick={() =>
                                            setCustomerType("organisation")
                                        }
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

                            {/* Email Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Email Address *
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={
                                        formErrors.email ? "border-red-500" : ""
                                    }
                                    required
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

                            {/* Company/Organisation - Only show for organisations */}
                            {customerType === "organisation" && (
                                <div className="space-y-2">
                                    <label
                                        htmlFor="company"
                                        className="text-sm font-medium text-gray-700"
                                    >
                                        Organization Name *
                                    </label>
                                    <Input
                                        id="company"
                                        name="company"
                                        placeholder="Enter your organization name"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className={
                                            formErrors.company
                                                ? "border-red-500"
                                                : ""
                                        }
                                        required
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

                            {/* Interests Field */}
                            <div className="space-y-2">
                                <label
                                    htmlFor="interests"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    What is one thing you would like to see in
                                    JechSpace?
                                </label>
                                <textarea
                                    id="interests"
                                    name="interests"
                                    placeholder="Tell us..."
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
                                        <p className="text-red-700 text-sm">
                                            {error}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isLoading || hasJoinedBefore}
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
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
                                By joining our waitlist, you agree to receive
                                updates about JechSpace. We respect your privacy
                                and you can unsubscribe at any time.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
};

export default WaitlistForm;
