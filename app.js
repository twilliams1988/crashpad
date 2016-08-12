var express       = require('express'),
    path          = require('path'),
    logger        = require('morgan'),
    cookieParser  = require('cookie-parser'),
    bodyParser    = require('body-parser'),
    session       = require('express-session'),
    flash         = require('connect-flash'),
    expressValidator   = require('express-validator'),
    passport      = require('passport'),
    Sequelize     = require('sequelize'),
    User          = require('./models/user');
    Pad          = require('./models/pad');
    Booking          = require('./models/booking');

    bcrypt        = require('bcrypt');

    require('./config/passport')(passport);

var routes    = require('./routes/index'),
    users     = require('./routes/users'),
    pads      = require('./routes/pads');
    requests  = require('./routes/requests');
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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//init passport
app.use(passport.initialize());
app.use(passport.session());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Express session
app.use(session({secret: 'secret', saveUninitialized: true, resave: true }));

//Connect Flash
app.use(flash());

//express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.'),
            root    = namespace.shift(),
            formParam = root;
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.errors = req.flash('errors');
  res.locals.user = req.user || null;
  next();
});

//routes
app.use('/', routes);
app.use('/users', users);
app.use('/pads', pads);
app.use('/requests', requests);
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
