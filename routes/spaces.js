var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.render('spaces/new', {
    title:      'List New Space',
    bodyClass:  'new-space'
  });
});

module.exports = router;
