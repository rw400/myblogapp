var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts_controller');

// GET all posts listings.
// GET /blog/
router.get('/', postsController.index);

// Get an Individual post listing

// GET /blog/:slug
router.get('/:slug', postsController.show);

// Create posts
// GET /blog/new
router.get('/new', postsController.new);
// POST /blog
router.post('/new', postsController.create);

// Export routes
module.exports = router;
