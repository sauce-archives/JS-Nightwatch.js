module.exports = {
    '@tags': ['desktop', 'parallel'],
  
    // The purpose of this test is to validate NightwatchJS parallel testing
    'Parallel: comments input field': function(browser) {
      
      browser
      // GIVEN user navigates to parallel url
      .url(browser.globals.parallelURL)
      
      .perform(function(done) {
        // THEN user expects to see comments input field
        browser.assert.elementPresent("#comments");
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
  