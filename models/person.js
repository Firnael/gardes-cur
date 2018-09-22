// models/person.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    lastModified: Number,
    name: String,
    email: String
});

module.exports = mongoose.model('Person', PersonSchema);
