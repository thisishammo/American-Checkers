const { Sequelize } = require('sequelize');

// Initialize Sequelize with MySQL connection using environment variable
const sequelize = new Sequelize("mysql://root:@localhost:3306/checkers", {
    dialect: 'mysql',
    logging: false,
});

module.exports = sequelize; 