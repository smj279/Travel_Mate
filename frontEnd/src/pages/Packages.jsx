// src/pages/packagess.jsx
import { useState } from "react";


const Packages = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Bandorban", "Cox's Bazar","Kuakata", "Paharpur", "Rangamati", "Saint Martin's Island", "Sreemangal", "Sundarbans", "Sylhet"];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <div style={{ padding: "30px", backgroundColor: "white", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "450px" }}>
        <label style={{ display: "block", color: "#4a5568", marginBottom: "8px" }}>Select your destination:</label>
        <select
          style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", marginBottom: "16px" }}
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="" disabled>Select your destination</option>
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button style={{ width: "100%", backgroundColor: "#3b82f6", color: "white", padding: "12px", borderRadius: "4px", border: "none", cursor: "pointer" }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"}
          onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Packages;  // This is the default export
