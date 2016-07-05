var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

var app = express();

var conn = require('./connection.js');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req,res) {
    conn.query('SELECT * FROM burgers;', function(err, data) {
      if (err) throw err;

      res.render('index', {burgers: data});

    });
});