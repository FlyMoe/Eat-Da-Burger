
var conn = require('./connection.js');

var orm = {

	// SELECT * FROM burgers
    selectAll: function(table) {
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },
    // INSERT INTO burgers (burger_name, devoured, date) VALUES (burger_name, devoured, date);
    insertOne: function(tabelToInsert, burger_name,) {
        var queryString = 'INSERT INTO ' + tabelToInsert + ' (burger_name, devoured, date) VALUES (' + burger_name + ', ' + devoured + ', ' + date + ');';
        console.log(queryString)
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    },

    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString = 'SELECT ' + tableOneCol + ', COUNT(' + tableOneCol + ') AS count FROM ' + tableOne + ' LEFT JOIN ' + tableTwo + ' ON ' + tableTwo + '.' + tableTwoForeignKey + '= ' + tableOne + '.id GROUP BY ' + tableOneCol + ' ORDER BY count desc LIMIT 1';
        connection.query(queryString, function(err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;
