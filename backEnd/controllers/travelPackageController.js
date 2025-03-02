const { sequelize } = require('../models');

// Fetch travel packages with location and guide information using raw SQL query
const getTravelPackages = async (req, res) => {
  try {
    const [results] = await sequelize.query(`
      SELECT 
        tp.name, tp.price, tp.duration, 
        l.name AS location_name, 
        l.description AS description, 
        l.city AS city,
        g.name AS guide_name, 
        g.phone AS phone
      FROM travel_packages tp
      LEFT JOIN locations l ON tp.location_id = l.location_id
      LEFT JOIN guides g ON tp.guide_id = g.guide_id
    `);
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTravelPackages };
