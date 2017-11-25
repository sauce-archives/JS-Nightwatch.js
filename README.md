## JS-Nightwatch.js
[![Travis Status](https://travis-ci.org/saucelabs-sample-test-frameworks/JS-Nightwatch.js.svg?branch=master)](https://travis-ci.org/saucelabs-sample-test-frameworks/JS-Nightwatch.js)

**Nightwatch does not support parallelization across multiple test cases based on the discussion [here](https://groups.google.com/forum/?utm_medium=email&utm_source=footer#!msg/nightwatchjs/cswDVyhDrUk/FG9L-uYZBgAJ).  Sauce Labs does not recommend Nightwatch.  Please review our [Webdriver.IO](https://github.com/saucelabs-sample-test-frameworks/JS-Mocha-WebdriverIO-Selenium) example for a better option.**

This code is provided on an "AS-IS” basis without warranty of any kind, either express or implied, including without limitation any implied warranties of condition, uninterrupted use, merchantability, fitness for a particular purpose, or non-infringement. Your tests and testing environments may require you to modify this framework. Issues regarding this framework should be submitted through GitHub. For questions regarding Sauce Labs integration, please see the Sauce Labs documentation at https://wiki.saucelabs.com/. This framework is not maintained by Sauce Labs Support.

### Environment Setup

1. Global Dependencies
    * Install [Node.js](https://nodejs.org/en/)
    * Or Install Node.js with [Homebrew](http://brew.sh/)
    ```
    $ brew install node
    ```
2. Sauce Credentials
    * In the terminal export your Sauce Labs Credentials as environmental variables:
    ```
    $ export SAUCE_USERNAME=<your Sauce Labs username>
	$ export SAUCE_ACCESS_KEY=<your Sauce Labs access key>
    ```
3. Project Dependencies
	* Install Node modules
	```
	$ npm install
	```

### Running Tests

* Tests in Parallel:
	```
	$ ./node_modules/.bin/nightwatch -e chrome,firefox,internet_explorer_edge,android_s4_emulator,iphone_6_simulator tests
	```

[Sauce Labs Dashboard](https://saucelabs.com/beta/dashboard/)

### Advice/Troubleshooting

1. There may be additional latency when using a remote webdriver to run tests on Sauce Labs. Timeouts or Waits may need to be increased.
    * [Selenium tips regarding explicit waits](https://wiki.saucelabs.com/display/DOCS/Best+Practice%3A+Use+Explicit+Waits)

### Resources
##### [Sauce Labs Documentation](https://wiki.saucelabs.com/)

##### [SeleniumHQ Documentation](http://www.seleniumhq.org/docs/)

##### [NightwatchJS Documentation](http://nightwatchjs.org/api)

##### [Node Documentation](https://nodejs.org/en/docs/)

##### [Stack Overflow](http://stackoverflow.com/)
* A great resource to search for issues not explicitly covered by documentation
