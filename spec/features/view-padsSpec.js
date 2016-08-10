/* jshint esversion: 6 */
var Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe('User visits pads page', function() {

  browser = new Browser();
  var url = 'http://localhost:3000';

  before(function(done) {
    browser.visit(url + '/pads/new', done);
  });

  describe('view pads', function() {

    before(function(done) {
      browser
        .fill('name',           'Tims House')
        .fill('description',    'This is a description')
        .fill('location',       'Angel')
        .fill('price',          200)
        .fill('availableFrom',  "2016-08-16")
        .fill('availableTo',    "2016-08-30")
        .pressButton('List my pad', done);
    });

    it('have listing', function() {
      browser.assert.text('body', 'Tims House');
      browser.assert.text('body', 'This is a');
      browser.assert.text('body', 'Angel');
      browser.assert.text('body', '200');
      browser.assert.text('body', 'Aug 16 2016');
      browser.assert.text('body', 'Aug 30 2016');
    });

  });

});
