// Require npm packages and .js files
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var orm = require('../models/burger.js');

module.exports = function(app) {

	app.get('/index', function(req, res){
		orm.selectAll('burgers')
		.then(function (result){
		 	res.render('index', {burgers: result});
		});
	});

	// Update
	app.put('/update', function(req,res){

	    //connection.query('UPDATE plans SET plan = ? WHERE id = ?', [req.body.plan, req.body.id], function(err, result) {
	      if (err) throw err;
	      res.redirect('/');
    });

	// Insert
	app.post('/create', function(req,res){
	    orm.selectAll('burgers');
	    .then(function (result){
	      	if (err) throw err;
		 	// res.render('index', {burgers: result});
		 	res.redirect('/index');
		});
	});
});