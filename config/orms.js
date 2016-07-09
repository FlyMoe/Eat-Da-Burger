
var connection = require('./connection.js');

var orm = {

	// SELECT * FROM burgers
    selectAll: function(table) {
        return new Promise(function(resolve,reject){
            var queryString = 'SELECT * FROM ' + table;
            connection.query(queryString, function(err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },
    // INSERT INTO burgers (burger_name, devoured, date) VALUES (?, ?, ?);
    insertOne: function(table, burger_name) {
        return new Promise(function(resolve,reject){
            // Convert todays date into mysql's date time. 
            var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
            var queryString = 'INSERT INTO ' + table + ' (burger_name, devoured, date) VALUES (?, ?, ?)';
            connection.query(queryString, [burger_name, 0, date], function(err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });
    },
    // UPDATE burgers SET burger_name = ? WHERE id = ?
    updateOne: function(table, id) {
        return new Promise(function(resolve,reject){
            var queryString = 'UPDATE ' + table + ' SET devoured = ? where id = ?';
            connection.query(queryString, ['1', id], function(err, result) {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }
};

module.exports = orm;
