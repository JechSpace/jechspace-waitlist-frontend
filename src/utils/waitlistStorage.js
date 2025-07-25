const STORAGE_KEY = "jechspace_waitlist_joined";
const EXPIRY_DAYS = 30; // Data expires after 30 days

export const waitlistStorage = {
  // Check if user has joined before
  hasJoined: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return false;

      const parsed = JSON.parse(data);
      const submissionDate = new Date(parsed.timestamp);
      const expiryDate = new Date(
        Date.now() - EXPIRY_DAYS * 24 * 60 * 60 * 1000
      );

      if (submissionDate < expiryDate) {
        // Remove expired data
        localStorage.removeItem(STORAGE_KEY);
        return false;
      } else {
        // Remove expired data
        localStorage.removeItem(STORAGE_KEY);
        return false;
      }
    } catch (error) {
      localStorage.removeItem(STORAGE_KEY);
      return false;
    }
  },

  // Store successful submission
  setJoined: (submissionData) => {
    try {
      const dataToStore = {
        ...submissionData,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToStore));
    } catch (error) {
      console.error("Failed to store waitlist data:", error);
    }
  },

  // Clear stored data
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  },

  // Get stored email for display
  getStoredEmail: () => {
    const data = waitlistStorage.hasJoined();
    return data ? data.email : null;
  },
};
