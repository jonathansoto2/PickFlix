const mongoose = require('mongoose');

const movies_schema = new mongoose.Schema({
    name: String,
    type: String,
    size: Number
})

const Movies = mongoose.model('Movies', movies_schema);

module.exports = Movies;