const {Given} = require('@cucumber/cucumber');


Given(/^Я нахожусь на главной странице$/, function () {

        browser.url(process.env.URL)


});