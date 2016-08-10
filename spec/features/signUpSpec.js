var Browser = require('zombie');

Browser.localhost('example.com', 3000);

describe('User visits signup page', function() {

  browser = new Browser();
  var url = 'http://127.0.0.1:3000';

  before(function(done) {
    browser.visit(url + '/users/new', done);
  });

  describe('submits form', function() {

    before(function(done) {
      browser
        .fill('firstName', 'User')
        .fill('lastName',  'lastUser')
        .fill('email',    'user@example.com')
        .fill('password', '12345')
        .fill('passwordConfirmation', '12345')
        .pressButton('Sign Up', done);
    });

    it('should be successful', function() {
      browser.assert.success();
      browser.assert.status(200);
    });

    it('should redirect to home page', function() {
      browser.assert.url({pathname: '/'});
    });
  });

  describe('submits form with incorrect/missing details', function() {

    it('passwords do not match', function() {
      before(function(done) {
        browser
          .fill('firstName', 'User')
          .fill('lastName',  'lastUser')
          .fill('email',    'user@example.com')
          .fill('password', '12345')
          .fill('passwordConfirmation', 'wrong')
          .pressButton('Sign Up', done);
        });
      browser.assert.url({pathname: '/users/new'});
    });
  });
});
