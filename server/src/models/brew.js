const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Brew = sequelize.define('Brew', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    beanType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    method: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coffeeGrams: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    waterGrams: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = Brew;