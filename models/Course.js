const Sequelize = require('sequelize');

const db = require('../dbconfig');

const Course = db.define('videos',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    duration:{
        type: Sequelize.DECIMAL,
    }

    
});

module.exports = Course