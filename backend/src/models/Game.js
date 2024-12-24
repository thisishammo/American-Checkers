const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Game model
const Game = sequelize.define('Game', {
    // Define your game attributes here
    // Example attributes:
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'waiting', // Possible values: 'waiting', 'in_progress', 'completed'
    },
    players: {
        type: DataTypes.JSON, // Alternatively, use specific associations for players
        allowNull: false,
    },
    // Add more fields as needed
}, {
    tableName: 'games',
    timestamps: true,
});

module.exports = Game; 