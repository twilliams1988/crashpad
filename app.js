var express       = require('express'),
    path          = require('path'),
    logger        = require('morgan'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    session       = require('express-session'),
    flash         = require('connect-flash'),
    validator     = require('express-validator'),
    passport      = require('passport'),
    Sequelize     = require('sequelize'),
    User          = require('./models/user');

    require('./config/passport')(passport);

var routes   = require('./routes/index'),
    users    = require('./routes/users'),
    spaces   = require('./routes/spaces'),
    sessions = require('./routes/sessions');

//init app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.locals.pagetitle = "CrashPad";

//Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({secret: 'secret', saveUninitialized: true, resave: true }));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//Connect Flash
app.use(flash());

//routes
app.use('/', routes);
app.use('/users', users);
app.use('/spaces', spaces);
app.use('/sessions', sessions);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
