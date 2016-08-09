var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users/new');
});


router.post('/', function(req, res) {
  var email = req.body.email,
      password = req.body.password;
  var password_digest = bcrypt.hashSync(password, salt);
  User.findOrCreate({where: {email: email, password: password_digest}});

  res.redirect('/');
  });

module.exports = router;
