import { useState, useCallback } from "react";
import { waitlistAPI } from "../services/api";
import { validateWaitlistForm } from "../utils/validation";

export const useWaitlist = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  // Submit waitlist form
  const submitWaitlist = useCallback(async (formData) => {
    setIsLoading(true);
    setError(null);

    try {
      const validation = validateWaitlistForm(formData);
      if (!validation.isValid) {
        setError("Please fix the form errors and try again.");
        setIsLoading(false);
        return { success: false, errors: validation.errors };
      }

      const result = await waitlistAPI.submitWaitlistFetch(formData);

      if (result.success) {
        setIsSubmitted(true);
        setIsLoading(false);
        return { success: true, data: result.data };
      } else {
        setError(result.error);
        setIsLoading(false);
        return { success: false, error: result.error };
      }
    } catch (err) {
      const errorMessage = "An unexpected error occurred. Please try again.";
      setError(errorMessage);
      setIsLoading(false);
      return { success: false, error: errorMessage };
    }
  }, []);

  // Check if email exists
  const checkEmailExists = useCallback(async (email) => {
    try {
      const result = await waitlistAPI.checkEmail(email);
      return result;
    } catch (err) {
      return { success: false, error: "Failed to check email status" };
    }
  }, []);

  // Fetch waitlist statistics
  const fetchStats = useCallback(async () => {
    try {
      const result = await waitlistAPI.getStats();
      if (result.success) {
        setStats(result.data);
      }
      return result;
    } catch (err) {
      return { success: false, error: "Failed to fetch statistics" };
    }
  }, []);

  // Reset form state
  const resetForm = useCallback(() => {
    setIsSubmitted(false);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    isSubmitted,
    error,
    stats,
    submitWaitlist,
    checkEmailExists,
    fetchStats,
    resetForm,
  };
};
