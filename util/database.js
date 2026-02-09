// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-database',
//     password: 'password123',
//     port: 3306
// });

// module.exports = pool.promise();


//CONNECT TO DATABASE BY SEQUELIZE
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-database', 'root', 'password123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;