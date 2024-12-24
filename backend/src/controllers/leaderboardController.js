const User = require('../models/User');

// Get Leaderboard
exports.getLeaderboard = async (req, res) => {
    try {
        // Fetch top 10 users sorted by points in descending order
        const leaderboard = await User.findAll({
            attributes: ['username', 'points'],
            order: [['points', 'DESC']],
            limit: 10,
        });

        res.status(200).json({ leaderboard });
    } catch (error) {
        console.error('Leaderboard Error:', error);
        res.status(500).json({ message: 'Server error while fetching leaderboard.' });
    }
}; 