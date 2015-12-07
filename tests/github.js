var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['git'],

    'Demo test GitHub': function(client) {
        client
            .url('https://github.com/nightwatchjs/nightwatch')
            .waitForElementVisible('body', 1000)
            .assert.title('nightwatchjs/nightwatch · GitHub');
    },

    'Failure demo test Github': function(client) {
        client
            .url('https://github.com/nightwatchjs/nightwatch')
            .waitForElementVisible('body', 1000)
            .assert.title('nightwatchjs/nightwatch · GitHubasdf');
    },

    afterEach: function(client, done) {

        client.customEnd(client.currentTest.results.failed);

        setTimeout(function() {
            done();
        }, 1000);

    }

};