var express = require('express');
var router = express.Router();
var passport = require('../config/passport');


/* GET users listing. */
router.get('/new', function(req, res) {
  res.render('users/new', {
    title:      'Sign Up',
    bodyClass:  'new-user',
    message: req.flash('signupMessage')
  });

});

router.post('/', passport.authenticate('local-signup', {
        successRedirect : '/sessions/new', // redirect to the secure profile section
        failureRedirect : '/users/new', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

module.exports = router;
