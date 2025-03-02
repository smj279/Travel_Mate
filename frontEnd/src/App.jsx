import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage.jsx';
import LoginPage from "./pages/login.jsx";
import Navbar from "./pages/navbar.jsx";
import Footer from "./pages/footer.jsx";
import Signup from "./pages/signUp.jsx";
import Packages from "./pages/Packages.jsx";  
import Hotel from "./pages/hotel.jsx";  // Assuming you have a Hotel page
import {  Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.jsx";
import Experiment from "./pages/table.jsx";

import "./App.css";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      {/* Navbar will be visible on all pages */}
      <Navbar />

      <div className="main-content">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<LandingPage />} />

          {/* Other routes */}
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to={"/"} />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/query" element={<Experiment />} />

          
        </Routes>
      </div>

      {/* Footer will be displayed on all pages */}
      <Footer />
    </>
  );
}

export default App;



