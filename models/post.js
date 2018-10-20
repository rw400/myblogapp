let mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tags: Array,
    created_at: {
        type: Date,
        default: Date.now
    },
    slug: String,
    content: {
        type: String,
        required: true
    },
    summary: String,
    image_url: String
});

let postModel = mongoose.model('Post', postSchema);

module.exports = postModel;
