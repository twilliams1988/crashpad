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
  if(req.body.password === req.body.passwordConfirmation) {
    User
        .create({firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    passwordDigest: bcrypt.hashSync(req.body.password, salt)
                  })
        .catch(function(error) {
          return res.send(error.message)
        })
    // res.redirect('/');
  } else {
   res.redirect('/users/new');
  }

  });

module.exports = router;
