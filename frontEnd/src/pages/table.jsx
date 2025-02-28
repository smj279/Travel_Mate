import React, { useEffect, useState } from "react";

const Experiment = () => {
  const [data, setData] = useState({ 
    travelPackages: [], 
    locations: [], 
    guides: [], 
    expensivePackages: [], 
    transports: [] 
  });

  useEffect(() => {
    console.log("Fetching data...");

    fetch("http://localhost:4000/api/query")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data received:", data);
        if (data && data.data) {
          setData(data.data);
        } else {
          console.error("Unexpected API response format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

  return (
    <div>
      <h2><u>Table</u></h2>

      {/* Travel Packages Table */}
      <h3>Travel Packages</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Location ID</th>
            <th>Duration</th>
            <th>Guide ID</th>
          </tr>
        </thead>
        <tbody>
          {data.travelPackages.map((row, index) => (
            <tr key={index}>
              <td>{row.package_id}</td>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.location_id}</td>
              <td>{row.duration}</td>
              <td>{row.guide_id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Locations Table */}
      <h3>Locations</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Location ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {data.locations.map((row, index) => (
            <tr key={index}>
              <td>{row.location_id}</td>
              <td>{row.name}</td>
              <td>{row.description}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Guides Table */}
      <h3>Guides</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Package Name</th>
            <th>Guide Name</th>
            <th>Guide Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.guides.map((row, index) => (
            <tr key={index}>
              <td>{row.package_id}</td>
              <td>{row.package_name}</td>
              <td>{row.guide_name}</td>
              <td>{row.guide_phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Expensive Packages Table */}
      <h3>Expensive Packages</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Package ID</th>
            <th>Package Name</th>
            <th>Price</th>
            <th>Location ID</th>
          </tr>
        </thead>
        <tbody>
          {data.expensivePackages.map((row, index) => (
            <tr key={index}>
              <td>{row.package_id}</td>
              <td>{row.package_name}</td>
              <td>{row.price}</td>
              <td>{row.location_id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Transport Table */}
      <h3>Transport Details</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Date</th>
            <th>Fare</th>
            <th>Company Name</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data.transports.length > 0 ? (
            data.transports.map((row, index) => (
              <tr key={index}>
                <td>{row.id || "N/A"}</td>
                <td>{row.source || "N/A"}</td>
                <td>{row.destination || "N/A"}</td>
                <td>{row.date || "N/A"}</td>
                <td>{row.fare || "N/A"}</td>
                <td>{row.company_name || "N/A"}</td>
                <td>{row.createdAt || "N/A"}</td>
                <td>{row.updatedAt || "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Experiment;
