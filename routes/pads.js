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
  var pad = Pad.create({name:     req.body.name,
                  location:       req.body.location,
                  description:    req.body.description,
                  price:          req.body.price,
                  availableFrom:  req.body.availableFrom,
                  availableTo:    req.body.availableTo
  }).then(function(user) {
  res.redirect('/pads');
  });
});

router.get('/:id', function(req, res, next) {
  var user_id = req.params.id;
  var allPads = Pad.findAll({
    where: {
      id: user_id
    }
  }).then(function(allPads) {
    res.render('pads/index', {
    title:      'Pad Listings',
    padList:    allPads
    });
  });
});


// get'/tags/:name' do
//   tag = Tag.first(name: params[:name])
//   @links = tag ? tag.links : []
//   erb :'links/index'
// // end
// app.get('/article/:id', function(req , res){
//   res.render('article' + req.params.id);
// });



module.exports = router;
