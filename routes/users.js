var express = require('express');
var router = express.Router();
// var passport = require('../config/passport');
var models  = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

/* GET users listing. */
router.get('/new', function(req, res) {
  res.render('users/new', {
    title: 'Sign Up'
  });

});

router.post('/', function(req, res) {
  var firstName = req.body.firstName,
      lastName = req.body.lastName,
      email = req.body.email,
      password = req.body.password,
      passwordConfirmation = req.body.passwordConfirmation;

  //Validation
  req.checkBody('firstName', "First name is required").notEmpty();
  req.checkBody('lastName', "Last name is required").notEmpty();
  req.checkBody('firstName', "Name is required").notEmpty();
  req.checkBody('email', "Email is required").notEmpty();
  req.checkBody('email', "Please enter a valid email").isEmail();
  req.checkBody('password', "Password is required").notEmpty();
  req.checkBody('passwordConfirmation', "Passwords do not match").equals(password);

  var errors = req.validationErrors();

  if(errors) {
    res.render('users/new', {title: 'Sign Up', errors: errors});
  } else {
    var newUser = models.user.build({
      firstName: firstName,
      lastName: lastName,
      email: email,
      passwordDigest: password
    });

    createUser(newUser, function(err, user){
      if(err) throw err;
    });
    req.flash('success_msg', 'You are registered and can now log in');
    res.redirect('/sessions/new');
  }
});

createUser = function(newUser, callback) {
  bcrypt.hash(newUser.passwordDigest, salt, function(err, hash) {
    newUser.passwordDigest= hash;
    newUser.save(callback);
  });
};

validPassword = function(password) {
  return bcrypt.compareSync(password, User.get('passwordDigest'));
};

//passport.authenticate('local-signup', {
//         successRedirect : '/sessions/new', // redirect to the secure profile section
//         failureRedirect : '/users/new', // redirect back to the signup page if there is an error
//         failureFlash : true // allow flash messages
//     }));

module.exports = router;
