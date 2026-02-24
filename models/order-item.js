const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const OrderItem = sequelize.define('orderItem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncreement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = OrderItem;