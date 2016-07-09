// Require npm packages and .js files
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var orm = require('../config/orms.js');

module.exports = function(app) {

	// Select all burgers
	app.get('/', function(req, res){
		// Call selectAll which selects all fields from the burgers table
		orm.selectAll('burgers')
		.then(function (result){
		 	res.render('index', {burgers: result});
		});
	});

	// Update devoured
	app.post('/update', function(req,res){
		// Calls updateOne which updates the burgers table by putting devoured to true
		orm.updateOne('burgers', req.body.id)
		.then(function (result){
			// Redirect to the root 
		 	res.redirect('/');
		});
	});
	
	// Insert new burger
	app.post('/create', function(req,res){
		// Call insertOne which inserts a new burger into the burgers table
	    orm.insertOne('burgers', req.body.burger)
	    .then(function (result){
	    	// Redirect to the root 
	    	res.redirect('/');
		});
	});
};