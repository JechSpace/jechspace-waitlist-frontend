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
    Twitter,
    Linkedin,
    Instagram,
    Users,
    Workflow,
    Bell,
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
    const [serverErrorPopup, setServerErrorPopup] = useState(null);
    const [showOrgHelper, setShowOrgHelper] = useState(true);

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

        // Clear field-specific errors
        if (formErrors[name]) {
            setFormErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }

        // Clear server error popup when user starts typing
        if (serverErrorPopup) {
            setServerErrorPopup(null);
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
            // Clear any existing errors first to avoid multiple error displays
            setFormErrors({});
            setServerErrorPopup(null);

            // Try to parse structured error codes
            const raw = result.error;
            let parsed = null;
            try {
                parsed = typeof raw === "string" ? JSON.parse(raw) : raw;
            } catch (e) {
                parsed = raw;
            }

            // Detect common domain error - show as popup for better UX
            const commonDomainCode =
                parsed?.errors?.error?.code || parsed?.code;
            if (commonDomainCode === "COMMON_EMAIL_DOMAIN") {
                setServerErrorPopup({
                    title: "Organization email not accepted",
                    message:
                        "It looks like you're signing up as an organization using a common email provider (e.g. gmail.com, yahoo.com). For organization sign ups please use a company-issued email address, or choose 'Individual' if this is a personal sign-up.",
                    suggestion:
                        "Use a company email (e.g. you@yourcompany.com) or switch to 'Individual' if appropriate.",
                });
            } else {
                // For other errors, show as popup instead of inline to avoid duplicate displays
                setServerErrorPopup({
                    title: "Unable to join waitlist",
                    message:
                        typeof result.error === "string"
                            ? result.error
                            : parsed?.message ||
                              "We couldn't process your request right now. Please try again later.",
                    suggestion: parsed?.errors?.error?.message || null,
                });
            }
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-lg mx-auto"
            >
                <div className="text-center space-y-6 p-8 bg-white rounded-2xl shadow-xl border-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900">
                            {hasJoinedBefore
                                ? "Welcome Back!"
                                : "Successfully Joined!"}
                        </h2>

                        <p className="text-lg text-gray-600">
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
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl mx-auto"
        >
            <Card className="shadow-xl border-0 bg-white">
                <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900">
                        Join the Waitlist
                    </CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                        Get early access to JechSpace and be the first to
                        experience the future of workspace management
                    </CardDescription>
                </CardHeader>
                {/* Server validation popup (dismissible) */}
                <AnimatePresence>
                    {serverErrorPopup && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mx-6 -mt-4 mb-4"
                        >
                            <div className="relative rounded-xl bg-yellow-50 border border-yellow-200 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0">
                                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-yellow-800">
                                            {serverErrorPopup.title}
                                        </div>
                                        <div className="text-sm text-yellow-700 mt-1">
                                            {serverErrorPopup.message}
                                        </div>
                                        {serverErrorPopup.suggestion && (
                                            <div className="text-sm text-yellow-600 mt-2">
                                                <strong>Suggestion:</strong>{" "}
                                                {serverErrorPopup.suggestion}
                                            </div>
                                        )}
                                    </div>

                                    <button
                                        onClick={() =>
                                            setServerErrorPopup(null)
                                        }
                                        className="absolute top-2 right-2 text-yellow-700 hover:text-yellow-900 p-1 rounded"
                                        aria-label="Close notification"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Customer Type Toggle */}
                        <div className="flex items-center justify-center">
                            <div className="flex bg-gray-100 rounded-xl p-1">
                                <button
                                    type="button"
                                    onClick={() => setCustomerType("user")}
                                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
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
                                        setCustomerType("organization")
                                    }
                                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                                        customerType === "organization"
                                            ? "bg-white text-blue-600 shadow-sm"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    organization
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
                                placeholder={
                                    customerType === "organization"
                                        ? "you@yourcompany.com"
                                        : "you@example.com"
                                }
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`h-12 ${
                                    formErrors.email
                                        ? "border-red-500"
                                        : "border-gray-200 focus:border-blue-500"
                                }`}
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

                        {/* Organization helper - only show when org selected */}
                        {customerType === "organization" && showOrgHelper && (
                            <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-md text-sm text-blue-700"
                            >
                                <div className="flex-1">
                                    <strong>Organization sign-up tip:</strong>
                                    <div className="mt-1">
                                        Please use a company email (e.g.
                                        you@yourcompany.com). Personal emails
                                        like Gmail, Yahoo, or Outlook may be
                                        rejected for organization accounts.
                                    </div>
                                </div>
                                <button
                                    onClick={() => setShowOrgHelper(false)}
                                    className="text-blue-700 hover:text-blue-900 p-1 rounded"
                                    aria-label="Dismiss organization helper"
                                >
                                    ✕
                                </button>
                            </motion.div>
                        )}

                        {/* Company/organization - Only show for organizations */}
                        {customerType === "organization" && (
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
                                    className={`h-12 ${
                                        formErrors.company
                                            ? "border-red-500"
                                            : "border-gray-200 focus:border-blue-500"
                                    }`}
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
                                placeholder="Tell us your thoughts..."
                                value={formData.interests}
                                onChange={handleInputChange}
                                rows={3}
                                className="flex w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isLoading || hasJoinedBefore}
                            className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
                        <p className="text-xs text-gray-500 text-center leading-relaxed">
                            By joining our waitlist, you agree to receive
                            updates about JechSpace. We respect your privacy and
                            you can unsubscribe at any time.
                        </p>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default WaitlistForm;
