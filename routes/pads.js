var express = require('express');
var router = express.Router();
var Pad = require('../models/pad');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
                });

  res.redirect('/pads');

});


module.exports = router;
