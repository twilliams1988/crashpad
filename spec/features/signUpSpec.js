var Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

  browser = new Browser();
  var url = 'http://localhost:3000';

  before(function(done) {
    browser.visit(url + '/users/new', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
        .fill('email',    'user@exampl.com')
        .fill('password', '12345')
        .pressButton('Sign Up', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });
  });
});
