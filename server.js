// server.js
var dotenv = require('dotenv');
dotenv.load();

var express = require("express");
var session = require('express-session');
var fs = require('fs');
var https = require('https');
var mongoose = require('mongoose');
var path = require("path");
var bodyParser = require("body-parser");
var httpRequest = require('request');

// Routers
var personApiRouter = require('./routes/personApiRouter');

// Connecting to MongoLab
mongoose.connect('mongodb://heroku_3k875bm0:m6vbp29lbkua9ktcnhr6bdjnd8@ds111410.mlab.com:11410/heroku_3k875bm0', function (err, res) {
    if (err) { console.log ('MONGOOSE ERROR, cannot connect to heroku_3k875bm0 : ' + err); }
    else { console.log ('App now connected to DB heroku_3k875bm0'); }
});

// Setting up Express server
var app = express();
app.use(express.static(__dirname + "/public"));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    cookie : { maxAge: 86400000 },
    saveUninitialized: true
  })
);

var router = express.Router();
router.use(function(req, res, next) {
	console.log('Routing : ' + req.method + ' ' + req.originalUrl);
	next();
});

// Local APIs
app.use('/api', router);
app.use('/api/person', personApiRouter);

// Run server
app.listen(process.env.PORT || 8080, function () {
  console.log('Server now running on port ' + process.env.PORT);
});
