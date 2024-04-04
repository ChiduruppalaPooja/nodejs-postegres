
const { Sequelize } = require('sequelize');

// Initialize Sequelize connection
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'password',
    database: 'postgres'
});

module.exports = sequelize;

