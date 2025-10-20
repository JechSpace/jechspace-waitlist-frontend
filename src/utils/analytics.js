import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-0HCQEZBHCX";

let isInitialized = false;

export const initGA = () => {
  if (!isInitialized && MEASUREMENT_ID !== "G-XXXXXXXXXX") {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        send_page_view: true, // Automatically send page views
      },
    });
    isInitialized = true;
    console.log("✅ GA4 Initialized");
  }
};

// Track page views manually (if needed)
export const trackPageView = (path) => {
  if (isInitialized) {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (isInitialized) {
    ReactGA.event(eventName, eventParams);
    console.log("📊 Event tracked:", eventName, eventParams);
  }
};

// Specific tracking functions for your waitlist

// 1. Track CTA button clicks
export const trackCTAClick = (location) => {
  trackEvent("cta_click", {
    button_location: location, // "navbar" or "hero"
  });
};

// 2. Track customer type selection
export const trackCustomerTypeSelect = (customerType) => {
  trackEvent("customer_type_selected", {
    customer_type: customerType, // "user" or "organization"
  });
};

// 3. Track form start (when user focuses on email field)
export const trackFormStart = (customerType) => {
  trackEvent("form_start", {
    customer_type: customerType,
  });
};

// 4. Track successful form submission
export const trackFormSubmit = (customerType, hasCompany) => {
  trackEvent("waitlist_signup", {
    customer_type: customerType,
    has_organization: hasCompany ? "yes" : "no",
    method: "waitlist_form",
  });
};

// 5. Track form errors
export const trackFormError = (errorType, errorMessage, customerType) => {
  trackEvent("form_error", {
    error_type: errorType, // "validation" or "server"
    error_message: errorMessage,
    customer_type: customerType,
  });
};

// 6. Track returning users (already joined)
export const trackAlreadyJoined = () => {
  trackEvent("already_on_waitlist", {
    returning_user: "yes",
  });
};

// 7. Track social link clicks
export const trackSocialClick = (platform) => {
  trackEvent("social_link_click", {
    platform: platform, // "twitter", "linkedin", "instagram"
  });
};

// 8. Track scroll depth (optional but useful)
export const trackScrollDepth = (percentage) => {
  trackEvent("scroll_depth", {
    percent_scrolled: percentage,
  });
};
