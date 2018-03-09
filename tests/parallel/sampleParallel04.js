module.exports = {
    '@tags': ['desktop', 'parallel'],
  
    // Validating NightwatchJS parallel testing
    'Parallel: textbox contains text': function(browser) {
      
      browser
      // GIVEN user navigates to parallel url
      .url(browser.globals.parallelURL)
      
      .perform(function(done) {
        // THEN user expects to see comments input field
        browser.assert.valueContains("form#the_forms_id input[type=text]", "i has no focus");
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
  