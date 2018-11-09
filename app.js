var createError = require('http-errors');
var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');
var blogRouter = require('./routes/blog');
var database = require('./database/database');

database();

var app = express();

// Set layout
app.set('layout', 'layout')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/post', postsRouter);

app.get('/blog', (req, res) => {
  var blogger = db.collection('blog').find()
  res.send('GET blog request homepage')
  next()
}, function (req, res){
  res.send('Blog page')
})

app.post('/blog', (req, res) => {
  res.send ('POST blog request')

  db.collection('blog').save(req.body, (err, result) => {
      if (err) return  console.log(err)

      console.log('saved to database')
      res.redirect('/')
  })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
