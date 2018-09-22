var express = require('express');
var request = require('request');
var async = require('async');
var personApiRouter = express.Router();
// Models
var Person = require('../models/person');

/**
 * Get all
 */
personApiRouter.route('/').get(function(req, res) {
  Person.find(function(err, persons) {
    if (err) { res.send(err); }
    res.json(persons);
  });
});

/**
 * Save one
 */
personApiRouter.route('/').post(function(req, res) {
  var person = new Person();
  person.name = req.body.name;
  person.email = req.body.email;

  person.save(function(err) {
    if (err) { res.send(err); }
    res.json("saved");
  });
});

module.exports = personApiRouter;
