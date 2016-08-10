var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);


/* GET users listing. */
router.get('/new', function(req, res) {
  res.render('users/new', {
    title:      'Sign Up',
    bodyClass:  'new-user'
  });

});


router.post('/', function(req, res) {
  var user = User.build({firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  password: req.body.password,
                  passwordConfirmation: req.body.passwordConfirmation
                });
  // if(user.password === user.passwordConfirmation) {
  //     user.save();
  //     res.redirect('/');
  // } else {
  //   res.render('/users/new');
  // }
  //
  });

      // checkPassword();
      // function checkPassword(){
      //   if(password !== passwordConfirmation) {
      //     res.redirect('/users/new');
      //   } else {
      //     var password_digest = bcrypt.hashSync(password, salt);
      //

      //   }
      // }

module.exports = router;
