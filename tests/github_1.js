module.exports = {
    tags: ['git'],
    'Demo test GitHub_1': function(client) {
        client
            .url('https://github.com/nightwatchjs/nightwatch')
            .waitForElementVisible('body', 1000)
            .assert.title('nightwatchjs/nightwatch · GitHub');
    },

    'Failure demo test Github_1': function(client) {
        client
            .url('https://github.com/nightwatchjs/nightwatch')
            .waitForElementVisible('body', 1000)
            .assert.title('nightwatchjs/nightwatch · GitHub abc');
    },

    afterEach: function(client, done) {

        client.customEnd(client.currentTest.results.failed);

        setTimeout(function() {
            done();
        }, 1000);
    }

};