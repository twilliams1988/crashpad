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
        .fill('name',         'Terry\'s House')
        .fill('description',  'This is a description')
        .fill('location',     'London')
        .fill('price',        200)
        .pressButton('List my pad', done);
    });

    it('have listing', function() {
      browser.assert.text('body', 'Terry\'s House');
      browser.assert.text('body', 'This is a');
      browser.assert.text('body', 'London');
      browser.assert.text('body', '200');
    });

  });

});
