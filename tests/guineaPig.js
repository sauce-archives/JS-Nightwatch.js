var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    'Good Case': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    'Also Good': function(client) {
        client
            .url('https://saucelabs-sample-test-frameworks.github.io/training-test-page')
            .waitForElementVisible('body', 1000)
            .assert.title('I am a page title - Sauce Labs');
    },

    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};
