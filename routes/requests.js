var express = require('express');
var router = express.Router();
// var Pad = require('../models/pad');
var Booking = require('../models/user');


router.get('/', function(req, res, next) {
  res.render('requests/index', {
    title: 'Requests'
  });
});

router.post('/', function(req, res, next) {
    var booking = Booking.create({
                  bookingDate:  req.body.bookingDate,
                  padId:        req.body.padId
    }).then(function(user) {
    res.redirect('/requests');
    });
});

module.exports = router;
