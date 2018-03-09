module.exports = {
    '@tags': ['desktop', 'parallel'],
  
    // The purpose of this test is to validate NightwatchJS parallel testing
    'Parallel: send button': function(browser) {
      
      browser
      // GIVEN user navigates to parallel url
      .url(browser.globals.parallelURL)
      
      .perform(function(done) {
        // THEN user expects to see comments input field
        browser.assert.elementPresent(".jumpButton");
        done();
      });
    },
  
    afterEach: function(browser, done) {
      browser
        .customSauceEnd()
        .end();
      done();
    }
  
  };
  