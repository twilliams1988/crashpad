var express = require('express');
var router = express.Router();
var Pad = require('../models/pad');


router.get('/', function(req, res, next) {
  var allPads = Pad.findAll().then(function(allPads) {
    res.render('pads/index', {
    title:      'Pad Listings',
    padList:    allPads
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('pads/new', {
    title:      'List New Pad',
    bodyClass:  'new-pad'
  });
});

router.post('/', function(req, res, next) {
  var pad = Pad.create({name:   req.body.name,
                  location:     req.body.location,
                  description:  req.body.description,
                  price:        req.body.price
  }).then(function(user) {
  res.redirect('/pads');
  });
});


module.exports = router;


// User.create({ username: 'barfooz', isAdmin: true }, { fields: [ 'username' ] }).then(function(user) {
//   // let's assume the default of isAdmin is false:
//   console.log(user.get({
//     plain: true
//   })) // => { username: 'barfooz', isAdmin: false }
// })
