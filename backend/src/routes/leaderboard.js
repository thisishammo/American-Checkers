const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Leaderboard Route
router.get('/', leaderboardController.getLeaderboard);

module.exports = router; 