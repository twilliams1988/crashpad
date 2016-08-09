var express = require('express');
var router = express.Router();
var Space = require('../models/space');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('spaces/new', {
    title:      'List New Space',
    bodyClass:  'new-space'
  });
});

router.post('/', function(req, res, next) {
  var name        = req.body.name,
      description = req.body.description,
      price       = req.body.price;

  Space.findOrCreate({
    where: {
      name:         name,
      description:  description,
      price:        price
    }});

  res.redirect('/spaces');

});


module.exports = router;
