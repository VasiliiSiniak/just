const {config} = require('../../wdio.conf');

config.runner = 'local';
config.port = 5555;
config.path = '/wd/hub';

config.capabilities = [{

    browserName: 'safari',
    platformName: 'macOS',

}];
config.specs = [`tests/features/featureFiles/includeTests/*.feature`];
config.services = [];


exports.config = config;
