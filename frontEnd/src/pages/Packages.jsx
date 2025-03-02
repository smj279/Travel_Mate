import React, { useState, useEffect } from "react";
import axios from "axios";
import "../allcss/Packages.css";

const InvestmentPitches = () => {
  const [packages, setPackages] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/travel_packages");
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching travel packages:", error);
    }
  };

  return (
    <div className="investment-pitches">
      <div className="dropdown-container">
        <label>Select your destination:</label>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="" disabled>
            Select your destination
          </option>
          {/* Use Set to ensure unique location names */}
          {[...new Set(packages.map((pkg) => pkg.location_name))].map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <button className="search-button">Search</button>
      </div>

      {/* Dynamic Package Cards */}
      <div className="pitch-cards">
        {packages
          .filter((pkg) => !selectedOption || pkg.location_name === selectedOption)
          .map((pkg) => (
            <div className="pitch-card" key={pkg.id}>
              <div className="card-header"></div>
              <div className="card-body">
                <h3>{pkg.name}</h3>
                <p className="location">📍 {pkg.location_name}</p>
                <p className="city">🌆 {pkg.city}</p>
                <p className="description">
                  Description: {pkg.description} <br />
                  Duration: {pkg.duration} <br />
                  Price: {pkg.price}Tk <br />
                  Guide: {pkg.guide_name ? pkg.guide_name : "Not Assigned"} <br />
                  Phone: {pkg.phone ? pkg.phone : "Not Available"}
                </p>
                <button className="find-out-more">Book Now</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InvestmentPitches;
