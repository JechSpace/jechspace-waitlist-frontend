// Email validation function
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Name validation function
export const validateName = (name) => {
  return name.trim().length >= 2;
};

// Phone validation function (optional)
// export const validatePhone = (phone) => {
//   if (!phone) return true; // Phone is optional
//   const phoneRegex = /^[\+]?[1-9][\d]{0,11}$/;
//   return phoneRegex.test(phone.replace(/\s/g, ""));
// };

export const validatePhone = (phone) => {
  if (!phone) return true; // Phone is optional
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, "");
  const phoneRegex = /^(\+?[0-9]{7,15})$/;
  return phoneRegex.test(cleanPhone);
};

// Waitlist form validation
export const validateWaitlistForm = (formData, customerType = "user") => {
  const errors = {};

  if (!validateName(formData.firstName)) {
    errors.firstName = "First name must be at least 2 characters long";
  }

  if (!validateName(formData.lastName)) {
    errors.lastName = "Last name must be at least 2 characters long";
  }

  if (!validateEmail(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone =
      "Please enter a valid phone number (7-15 digits, optional + prefix)";
  }

  // Company is required for organisations
  if (
    customerType === "organisation" &&
    (!formData.company || formData.company.trim().length < 2)
  ) {
    errors.company =
      "Company/Organization name is required and must be at least 2 characters long";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
