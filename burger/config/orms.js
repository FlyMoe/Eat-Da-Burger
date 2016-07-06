
var connection = require('./connection.js');
var promise = require('promise');

var orm = {

	// SELECT * FROM burgers
    selectAll: function(table) {
        return new promise(function(resolve,reject){
            var queryString = 'SELECT * FROM ' + table;
            connection.query(queryString, function(err, result) {
                if (err){
                    reject(err);
                } else { 
                    resolve(result);
               //console.log(result);
                }
            });
        });
    },
    // INSERT INTO burgers (burger_name, devoured, date) VALUES (?, ?, ?);
    insertOne: function(tabelToInsert, burger_name, devoured, date) {
        var queryString = 'INSERT INTO ' + tabelToInsert + ' (burger_name, devoured, date) VALUES (' + burger_name + ', ' + devoured + ', ' + date + ')';
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    // UPDATE burgers SET burger_name = ? WHERE id = ?
    updateOne: function(table, burger_name, id) {
        var queryString = 'UPDATE ' + table + ' SET burger_name = ' + burger_name + ' WHERE id=' + id;
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;
