
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'family99',
    database: 'burgers_db'
});

module.exports = connection;