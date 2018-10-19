var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts_controller');

// GET all posts listings.
// /blog/
router.get('/', postsController.index)

// Get an Individual post listing

// /blog/:slug
router.get('/:slug', postsController.show)

module.exports = router;
