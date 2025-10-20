// Common email providers that should not be allowed for organizations
// Mirrored from backend constants.py
const COMMON_EMAIL_DOMAINS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "icloud.com",
    "mail.com",
    "protonmail.com",
    "zoho.com",
    "yandex.com",
    "live.com",
    "msn.com",
    "me.com",
    "gmx.com",
];

// Email validation function
export const validateEmail = (email) => {
    if (typeof email !== "string") return false;
    // Basic length checks from RFCs
    if (email.length > 254) return false;

    const parts = email.split("@");
    if (parts.length !== 2) return false;

    const [local, domain] = parts;

    // Local part checks
    if (!local || local.length > 64) return false;
    // No leading/trailing dot, no consecutive dots
    if (local.startsWith(".") || local.endsWith(".")) return false;
    if (local.indexOf("..") !== -1) return false;
    // Allowed characters in local part (RFC 5322 simplified subset)
    const localValid = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~.-]+$/.test(local);
    if (!localValid) return false;

    // Domain checks - allow multi-level subdomains like st.lasu.edu.ng
    if (!domain || domain.length > 253) return false;
    const domainLabels = domain.split(".");
    // Each label must be 1-63 chars, letters/numbers/hyphen, not start/end with hyphen
    const labelRegex = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;
    for (let i = 0; i < domainLabels.length; i++) {
        const label = domainLabels[i];
        if (!label || label.length > 63) return false;
        if (!labelRegex.test(label)) return false;
    }

    // TLD should be at least 2 characters (allows country codes)
    const tld = domainLabels[domainLabels.length - 1];
    if (!tld || tld.length < 2) return false;

    return true;
};

// Check if email domain is a common personal email provider
export const isCommonEmailDomain = (email) => {
    if (typeof email !== "string") return false;
    const parts = email.split("@");
    if (parts.length !== 2) return false;
    const domain = parts[1].toLowerCase();
    return COMMON_EMAIL_DOMAINS.includes(domain);
};

// Simplified waitlist form validation - only email and company
export const validateWaitlistForm = (formData, customerType = "user") => {
    const errors = {};

    // Email validation
    if (!formData.email || !validateEmail(formData.email)) {
        errors.email = "Please enter a valid email address";
    } else if (
        customerType === "organization" &&
        isCommonEmailDomain(formData.email)
    ) {
        // Check if organization is using a common personal email domain
        errors.email =
            "Organizations must use a company email address (e.g., you@yourcompany.com)";
    }

    // Company validation (required for organizations only)
    if (customerType === "organization") {
        if (!formData.company || formData.company.trim().length < 2) {
            errors.company = "Organization name is required";
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
