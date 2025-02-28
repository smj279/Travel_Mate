import React, { useState } from "react";
import "../allcss/Packages.css";

const InvestmentPitches = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    "Bandorban",
    "Cox's Bazar",
    "Kuakata",
    "Paharpur",
    "Rangamati",
    "Saint Martin's Island",
    "Sreemangal",
    "Sundarbans",
    "Sylhet",
  ];

  return (
    <div className="investment-pitches">

      <div className="dropdown-container">
        <label>Select your destination:</label>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>
            Select your destination
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="search-button">Search</button>
      </div>

      {/* Pitch Cards */}
      <div className="pitch-cards">
        {[1, 2, 3].map((item) => (
          <div className="pitch-card" key={item}>
            <div className="card-header"></div>
            <div className="card-body">
              <h3>GEN AI DUBBING</h3>
              <p className="location">📍 North East, United States</p>
              <p className="description">
                Audiences want highly tailored video experiences in their native language, but video dubbing is incredibly time-consuming and costly.
              </p>
              <button className="find-out-more">Visit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPitches;
