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

// Process Subquery:
//      `
//       SELECT 
//         tp.name, 
//         tp.price, 
//         tp.duration, 
//         (SELECT l.name FROM locations l WHERE l.location_id = tp.location_id) AS location_name, 
//         (SELECT l.description FROM locations l WHERE l.location_id = tp.location_id) AS description, 
//         (SELECT l.city FROM locations l WHERE l.location_id = tp.location_id) AS city,
//         (SELECT g.name FROM guides g WHERE g.guide_id = tp.guide_id) AS guide_name, 
//         (SELECT g.phone FROM guides g WHERE g.guide_id = tp.guide_id) AS phone
//       FROM travel_packages tp
//     `



// Process complex query:
    //  `
    //   SELECT 
    //     tp.name, 
    //     tp.price, 
    //     tp.duration, 
    //     l.name AS location_name, 
    //     l.city AS city,
    //     (SELECT description FROM locations WHERE location_id = tp.location_id) AS description, 
    //     g.name AS guide_name, 
    //     (SELECT phone FROM guides WHERE guide_id = tp.guide_id) AS phone  
    //   FROM travel_packages tp
    //   LEFT JOIN locations l ON tp.location_id = l.location_id
    //   LEFT JOIN guides g ON tp.guide_id = g.guide_id
    //   WHERE EXISTS (SELECT 1 FROM locations WHERE location_id = tp.location_id)
    //   OR EXISTS (SELECT 1 FROM guides WHERE guide_id = tp.guide_id)
    // `


//   Process cross join:
//     `
//       SELECT 
//         tp.name, 
//         tp.price, 
//         tp.duration, 
//         l.name AS location_name, 
//         l.city AS city,
//         (SELECT description FROM locations WHERE location_id = tp.location_id) AS description, 
//         g.name AS guide_name, 
//         (SELECT phone FROM guides WHERE guide_id = tp.guide_id) AS phone  
//       FROM travel_packages tp
//       CROSS JOIN locations l
//       CROSS JOIN guides g
//       WHERE l.location_id = tp.location_id
//       AND g.guide_id = tp.guide_id
//     `


module.exports = { getTravelPackages };
