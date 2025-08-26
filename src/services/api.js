import axios from "axios";

// Configure base URL for the API
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://api-waitlist.jechspace.com/api/v1";

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

// Waitlist API functions
export const waitlistAPI = {
  // Submit waitlist form
  submitWaitlistFetch: async (formData) => {
    try {
      const apiPayload = {
        email: formData.email,
        user_type:
          formData.customerType === "user" ? "individual" : "organization",
      };

      if (formData.customerType === "organisation") {
        apiPayload.organization_name = formData.company;
      }

      const response = await fetch(`${API_BASE_URL}/waitlist/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorData}`);
      }

      const result = await response.json();
      return {
        success: true,
        data: result,
        message: "Successfully joined the waitlist!",
      };
    } catch (error) {
      return {
        success: false,
        error: error.message || "Failed to join waitlist. Please try again.",
      };
    }
  },

  // Submit waitlist form using axios (alternative method)
  submitWaitlist: async (formData) => {
    try {
      const apiPayload = {
        email: formData.email,
        user_type:
          formData.customerType === "user" ? "individual" : "organization",
      };

      if (formData.customerType === "organisation") {
        apiPayload.organization_name = formData.company;
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
      const response = await api.get(
        `/waitlist/check/?email=${encodeURIComponent(email)}`
      );
      return {
        success: true,
        exists: response.data.exists,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Failed to check email status",
      };
    }
  },

  // Get waitlist statistics
  getStats: async () => {
    try {
      const response = await api.get("/waitlist/stats/");
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Failed to fetch statistics",
      };
    }
  },
};

export default api;
