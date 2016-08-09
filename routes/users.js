var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users/new');
});


router.post('/', function(req, res) {
  var email = req.body.email,
      password = req.body.password;

  User.findOrCreate({where: {email: email, password: password}});

  res.redirect('/');
  });

module.exports = router;
