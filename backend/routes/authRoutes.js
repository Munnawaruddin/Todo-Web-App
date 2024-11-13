// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');  // Import signup logic

// POST request for signup
router.post('/signup', signup);

module.exports = router;  // Export the routes for use in index.js
