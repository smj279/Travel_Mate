import React from "react";
import { Routes, Route } from "react-router-dom";


import LoginPage from "./pages/login.jsx";
import Navbar from "./pages/navbar.jsx";
import Footer from "./pages/footer.jsx";
import Signup from "./pages/signUp.jsx";
import LandingPage from "./pages/landingPage.jsx";
import Flight from "./pages/flight.jsx";  // Assuming you have a Flight page
import Bus from "./pages/bus.jsx";  // Assuming you have a Bus page
import Hotel from "./pages/hotel.jsx";  // Assuming you have a Hotel page


import "./App.css";

function App() {
  return (
    <>
      {/* Navbar will be visible on all pages */}
      <Navbar />

      <div className="main-content">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Other routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/hotel" element={<Hotel />} />
          
        </Routes>
      </div>

      {/* Footer will be displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;
