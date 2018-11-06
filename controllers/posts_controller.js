const Post = require('../models/post');

//var title = "My Blog App";

// Displays a list of all blog posts
exports.index = function (req, res, next) {
    Post.find().exec((err, posts) => {
        console.log(posts)
        res.render('posts/index', {title: posts['title'], posts})
    });
};

// /blog/:slug
// req.params.slug
exports.show = function (req, res, next) {
    Post.find().exec((err, posts) => {
        let post = posts.filter(x => x['slug'] === req.params['slug'])[0];
        res.render('posts/show', { title: posts['title'], post })
    });
};

exports.new = function(req, res, next) {
	// let post = posts[0];
	res.render('posts/new', { title: 'New Blog Post' });
};

// exports.new = function (req, res, next) {
// 	console.log('here')
// 	res.render('posts/create', { title: "New Post", test: 'hello'});
// };

exports.create = function (req, res, next) {
    let newPost = new Post(req.body);

    newPost.save(err => {
        if (err) {
            return res.status(500).send(err);
        }
        return res.render('/')
    })
};
