/* jshint esversion: 6 */

const Browser = require('zombie');

Browser.localhost('localhost', 3000);

describe('User visits list pad page', function() {

  const browser = new Browser();

  before(function(done) {
    browser.visit('/space/new', done);
  });

  describe('list space', function() {

    before(function(done) {
      browser
        .fill('name',         'Terry\'s House')
        .fill('description',  'This is a description')
        .fill('price',        200);
    });

  });

});
