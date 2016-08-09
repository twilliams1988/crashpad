/* jshint esversion: 6 */
var Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe('User visits list space page', function() {

  browser = new Browser();
  var url = 'http://localhost:3000';

  before(function(done) {
    browser.visit(url + '/spaces/new', done);
  });

  describe('list space', function() {

    before(function(done) {
      browser
        .fill('name',         'Terry\'s House')
        .fill('description',  'This is a description')
        .fill('price',        200)
        .pressButton('List my pad', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('will redirect to /spaces', function() {
      brower.assert.url(url + '/spaces');
    });

  });

});
