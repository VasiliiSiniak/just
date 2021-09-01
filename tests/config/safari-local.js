const {config} = require('./../../wdio.conf');

config.capabilities = [

    {
        platformName: 'iOS',
        browserName: 'safari',
        maxInstances: 1,
        automationName: 'XCUITest',
        udid: "",
        deviceName: 'iPhone',
        platformVersion: '14.6',
        port: 4723,
        path: '/wd/hub',

    }

];

config.services = [];
config.specs = [`tests/features/featureFiles/allFeatureFiles/${process.env.PROJECT}/ios/*.feature`];


exports.config = config;
