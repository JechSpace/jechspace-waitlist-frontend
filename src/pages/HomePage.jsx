import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="dashboard">
        <DashboardPreview />
      </div>
      {/* <div id="testimonials">
        <Testimonials />
      </div> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
