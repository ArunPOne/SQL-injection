const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize('testdb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Disable query logging
});

module.exports = sequelize;
