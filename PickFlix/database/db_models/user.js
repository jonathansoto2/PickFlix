const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    first: String,
	email: String,
	password: String
})

const User = mongoose.model('User', user_schema);

module.exports = User;