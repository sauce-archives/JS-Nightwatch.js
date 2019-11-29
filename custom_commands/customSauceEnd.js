exports.command = function(callback) {
    const SauceLabs = require("saucelabs");

    const myAccount = new SauceLabs.default({
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY
        //region: 'eu' for EU DC
    });

    var sessionid = this.capabilities['webdriver.remote.sessionid'],
        jobName = this.currentTest.name,
        passed = this.currentTest.results.testcases[jobName].failed === 0;

    console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);

    myAccount.updateJob(process.env.SAUCE_USERNAME, sessionid, {passed: passed});

};

