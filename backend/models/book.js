const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
    name: { type: String },
    author: { type: String },
    editorial: { type: String },
    creationDate: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Books', Book);