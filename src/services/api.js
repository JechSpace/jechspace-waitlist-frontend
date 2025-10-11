import axios from "axios";

// Configure base URL for the API
const API_BASE_URL =
    import.meta.env.VITE_API_URL || "https://api.jechspace.com/api/v1";

// Dev-only environment visibility
if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.info("[API] Using base URL:", API_BASE_URL);
    // eslint-disable-next-line no-console
    console.info("[API] Environment:", import.meta.env.MODE);
}

// Create axios instance with default configuration
const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling common errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
);

// Dev-only logging for API debugging
const devLog = (...args) => {
    if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.log("[API]", ...args);
    }
};

// Retry wrapper with exponential backoff for network failures
const withRetry = async (fn, maxRetries = 2, baseDelay = 1000) => {
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            // Only retry on network errors, not HTTP 4xx/5xx responses
            const isNetworkError =
                !error.response &&
                (error.code === "ENOTFOUND" ||
                    error.message?.includes("Network Error") ||
                    error.message?.includes("Failed to fetch"));

            if (isNetworkError && attempt < maxRetries) {
                const delay = baseDelay * Math.pow(2, attempt);
                devLog(
                    `Retrying request in ${delay}ms (attempt ${attempt + 1}/${
                        maxRetries + 1
                    })`
                );
                await new Promise((resolve) => setTimeout(resolve, delay));
                continue;
            }
            throw error;
        }
    }
    throw lastError;
};

// Waitlist API functions
export const waitlistAPI = {
    // Submit waitlist form (unified axios approach with retry)
    submitWaitlistFetch: async (formData) => {
        try {
            const apiPayload = {
                email: formData.email,
                user_type:
                    formData.customerType === "user"
                        ? "individual"
                        : "organization",
            };

            if (formData.customerType === "organization") {
                apiPayload.organization_name = formData.company;
            }
            // Include interests if provided by the form
            if (formData.interests) {
                apiPayload.interests = formData.interests;
            }

            devLog("Submitting waitlist form:", {
                email: apiPayload.email,
                user_type: apiPayload.user_type,
            });

            const response = await withRetry(() =>
                api.post("/waitlist/", apiPayload)
            );

            return {
                success: true,
                data: response.data,
                message: "Successfully joined the waitlist!",
            };
        } catch (error) {
            // Detect network/DNS failures for user-friendly messages
            const isNetworkError =
                !error.response &&
                (error.code === "ENOTFOUND" ||
                    error.message?.includes("Network Error") ||
                    error.message?.includes("Failed to fetch") ||
                    !navigator.onLine);

            devLog("Submit error:", error);

            return {
                success: false,
                error: isNetworkError
                    ? "Unable to connect to our servers. Please check your internet connection and try again."
                    : error.response?.data?.message ||
                      error.message ||
                      "Failed to join waitlist. Please try again.",
                details: error.response?.data,
            };
        }
    },

    // Submit waitlist form using axios (alternative method)
    submitWaitlist: async (formData) => {
        try {
            const apiPayload = {
                email: formData.email,
                user_type:
                    formData.customerType === "user"
                        ? "individual"
                        : "organization",
            };

            if (formData.customerType === "organization") {
                apiPayload.organization_name = formData.company;
            }
            // Include interests if provided by the form
            if (formData.interests) {
                apiPayload.interests = formData.interests;
            }

            const response = await api.post("/waitlist/", apiPayload);

            return {
                success: true,
                data: response.data,
                message: "Successfully joined the waitlist!",
            };
        } catch (error) {
            return {
                success: false,
                error:
                    error.response?.data?.message ||
                    error.message ||
                    "Failed to join waitlist. Please try again.",
                details: error.response?.data,
            };
        }
    },

    // Check if email is already on waitlist
    checkEmail: async (email) => {
        try {
            devLog("Checking email:", email);
            const response = await withRetry(() =>
                api.get(`/waitlist/check/?email=${encodeURIComponent(email)}`)
            );
            return {
                success: true,
                exists: response.data.exists,
            };
        } catch (error) {
            const isNetworkError =
                !error.response &&
                (error.code === "ENOTFOUND" ||
                    error.message?.includes("Network Error") ||
                    !navigator.onLine);

            devLog("Check email error:", error);

            return {
                success: false,
                error: isNetworkError
                    ? "Unable to verify email. Please check your connection and try again."
                    : error.response?.data?.message ||
                      "Failed to check email status",
            };
        }
    },

    // Get waitlist statistics
    getStats: async () => {
        try {
            devLog("Fetching waitlist stats");
            const response = await withRetry(() => api.get("/waitlist/stats/"));
            return {
                success: true,
                data: response.data,
            };
        } catch (error) {
            const isNetworkError =
                !error.response &&
                (error.code === "ENOTFOUND" ||
                    error.message?.includes("Network Error") ||
                    !navigator.onLine);

            devLog("Get stats error:", error);

            return {
                success: false,
                error: isNetworkError
                    ? "Unable to load statistics. Please check your connection."
                    : error.response?.data?.message ||
                      "Failed to fetch statistics",
            };
        }
    },
};

export default api;
