const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: String,
	lastName: String
});

var User = mongoose.model("User", userSchema);

module.exports = User;