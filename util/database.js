const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-database',
    password: 'password123',
    port: 3306
});

module.exports = pool.promise();