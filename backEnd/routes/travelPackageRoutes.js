const express = require('express');
const router = express.Router();
const { getTravelPackages } = require('../controllers/travelPackageController');

// Fetch all travel packages
router.get('/', getTravelPackages); // Change '/travel-packages' to '/'


module.exports = router;
