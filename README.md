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



#### Tests in Parallel:

To run tests in parallel (single environment profile) you need to configure `test_workers` and `parallel_process_delay` within nightwatch.json file. 

The `test_workers` enables the test runner to launch a configurable number of child processes and distribute the load of tests to be executed in parallel. It's important to understand how to configure how many child processes can run in parallel. 

* "auto" - determined by number of CPUs e.g. 4 CPUs means 4 workers
* {number} - specifies an exact number of workers   

If you configure workers to {number}, I recommend enabling `parallel_process_delay' parameter to delay (in milliseconds) between starting the child processes when running tests in parallel mode. You will need to explore what is the best delay for your machine to slowly ramp up the concurrency. 

```
  "parallel_process_delay" : 500,
  "test_workers": {
    "enabled": true,
    "workers": 30
  },
```
Execute all tests in parallel for a specific environment profile 
`$ nightwatch -e chrome`

To execute multiple environment profiles in parallel, recommend configuring your CI pipeline to run each environment profile on it's own CI worker in parallel; CI Worker - chrome, CI Worker -firefox, and CI Worker - internet_explorer_edge

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
