// Email validation function
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Simplified waitlist form validation - only email and company
export const validateWaitlistForm = (formData, customerType = "user") => {
  const errors = {};

  // Email validation
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Company validation (required for organisations only)
  if (customerType === "organisation") {
    if (!formData.company || formData.company.trim().length < 2) {
      errors.company = "Organization name is required";
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
