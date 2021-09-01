const {config} = require('./../../wdio.conf');
config.capabilities = [
    {
        platformName: 'Android',
        browserName: 'chrome',
        chromeOptions: {'args': ['--incognito', '--disable-cache']},
        maxInstances: 1,
        automationName: 'uiautomator2',
        deviceName: 'R58R81CQXHD',
        platformVersion: '',
        port: 4723,
        path: '/wd/hub',

    },

];
config.specs=['tests/features/featureFiles/includeTests/*.feature'];
config.services = [];






exports.config = config;
