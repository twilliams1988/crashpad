var express = require('express');
var router = express.Router();
var passport = require('../config/passport');
var models  = require('../models');

/* GET users listing. */
router.get('/new', function(req, res) {
  res.render('sessions/new', {
    title:      'Log In'
  });
});

router.post('/', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/sessions/new' // redirect back to the signup page if there is an error
    // failureFlash : true // allow flash messages
  }));

router.get('/logout', function(req, res){
   req.logout();
   req.session.destroy();
   res.redirect('/');
  });

module.exports = router;
