var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts_controller');

// GET /blog/new
router.get('/new', postsController.new);

// GET all posts listings.
// GET /blog/
router.get('/', postsController.index);

// Get an Individual post listing
router.get('/blog', postsController.show);

// GET /blog/:slug
router.get('/:slug', postsController.show);

// Create posts
// POST /blog
router.post('/', postsController.create);
// TODO: Add Edit and Delete Requests
router.post('/blog', postsController.create);

router.delete('/blog', postsController.delete);

router.put('blog', postsController.update);

// Export routes
module.exports = router;
