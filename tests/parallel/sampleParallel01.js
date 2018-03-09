module.exports = {
    '@tags': ['desktop', 'parallel'],
  
    // The purpose of this test is to validate NightwatchJS parallel testing
    'Parallel: email input field': function(browser) {
      
      browser
        // GIVEN user navigates to parallel url
        .url(browser.globals.parallelURL)
        
        .perform(function(done) {
          // THEN user expects to see email input field
          browser.assert.elementPresent("#fbemail");
          done();
        });
    },
  
    afterEach: function(browser, done) {
      browser
        .setSauceEnd()
        .end();
      done();
    }
  
  };
  