import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WaitlistPage from "./pages/WaitlistPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
