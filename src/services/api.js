import axios from "axios";

// Configure base URL for your Django backend
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// Create axios instance with default configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem("token");
      // Redirect to login if needed
    }
    return Promise.reject(error);
  }
);

// Waitlist API functions
export const waitlistAPI = {
  // Submit waitlist form
  submitWaitlist: async (formData) => {
    try {
      const response = await api.post("/waitlist/", formData);
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

  // Get waitlist statistics (optional)
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
