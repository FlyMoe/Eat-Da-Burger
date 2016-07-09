var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

// Tells node that we are creating an "express" server
var app = express();

// Connection to the database
var connection = require('./models/burger.js');

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Handlebars.registerHelper("inc", function(value, options)
// {
//     return parseInt(value) + 1;
// });

// View the public directory
app.use(express.static('public'));

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000; 

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ROUTER
require('./controllers/burgers_controllers.js')(app); 

// LISTENER
app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});