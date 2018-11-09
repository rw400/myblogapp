var express = require('express');
var router = express.Router();

/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', {
    title: 'Blog Title Page',
    app: {
      message: 'This is the blog page',
    }
  });
});

router.post('/blog', postsController.create);

module.exports = router;
