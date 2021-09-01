const {config} = require('../../wdio.conf');


config.runner = 'local';
config.path = '/wd/hub';
config.port = 5555; //5555 - selenium-standalone

config.capabilities = [{

    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--incognito',
            '--disable-setuid-sandbox',
            '--start-maximized',
            '--enable-logging --v=1',
            '--enable-features=NetworkService,NetworkServiceInProcess'

        ],
    },
    'selenoid:options': {
        enableVNC: true,
        enableVideo: false
    },

    maxInstances: 1,


}];
config.specs = [
    'tests/features/featureFiles/includeTests/*.feature'

];
config.services = [];


exports.config = config;