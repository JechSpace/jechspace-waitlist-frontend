import React, { useEffect } from "react";
import { initGA } from "./utils/analytics";
import WaitlistPage from "./pages/WaitlistPage";

function App() {
  useEffect(() => {
    // Initialize GA4 when app loads
    initGA();
  }, []);

  return (
    <div className="App">
      <WaitlistPage />
    </div>
  );
}

export default App;
