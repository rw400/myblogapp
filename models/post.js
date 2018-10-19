let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
	title: String
});

let postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
