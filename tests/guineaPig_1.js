var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['guineaPig'],

    'Guinea Pig Assert Title 2': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Failure Guinea Pig Assert Title 2': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('Banana');
    },

    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};