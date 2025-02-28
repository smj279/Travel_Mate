const db = require("../config/database");


const getAllExperiments = async (req, res) => {
  try {
    const firstQuery = `
      SELECT  
        t.package_id AS package_id,
        t.name AS name,
        t.price AS price,
        t.location_id AS location_id, 
        t.duration AS duration,
        t.guide_id AS guide_id 
      FROM travel_packages t;
    `;

    const secondQuery = `
      SELECT  
        l.location_id AS location_id,
        l.name AS name,
        l.description AS description,
        l.city AS city
      FROM locations l;
    `;

    const thirdQuery = `
      SELECT 
        t.package_id AS package_id,
        t.name AS package_name,
        g.name AS guide_name,
        g.phone AS guide_phone
      FROM travel_packages t
      JOIN guides g ON t.guide_id = g.guide_id;
    `;

    const fourthQuery = `
      SELECT 
        t.package_id AS package_id,
        t.name AS package_name,
        t.price AS price,
        t.location_id AS location_id
      FROM travel_packages t
      WHERE t.price > 7000
      AND t.location_id IN (SELECT location_id FROM locations l);
    `;

    const fifthQuery = `
      SELECT 
        id, 
        source, 
        destination, 
        date, 
        fare, 
        company_name, 
        createdAt, 
        updatedAt
      FROM transports;
    `;

    // Execute queries
    const [firstResults] = await db.query(firstQuery);
    const [secondResults] = await db.query(secondQuery);
    const [thirdResults] = await db.query(thirdQuery);
    const [fourthResults] = await db.query(fourthQuery);
    const [fifthResults] = await db.query(fifthQuery);

    // Send response with the results
    res.json({
      sql: { firstQuery, secondQuery, thirdQuery, fourthQuery, fifthQuery },
      data: {
        travelPackages: firstResults,
        locations: secondResults,
        guides: thirdResults,
        expensivePackages: fourthResults,
        transports: fifthResults // Added transport details
      }
    });
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllExperiments };
