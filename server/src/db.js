const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('coffee_brew_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;