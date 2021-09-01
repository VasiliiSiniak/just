const {When} = require('@cucumber/cucumber');
const elementManager = require('./../../services/elementManager')
const dataTest = require('../../features/testData/valueData');


When(/^Я нажимаю "([^"]*)" на "([^"]*)"$/, function (element, pageObject) {
    // browser.dismissAlert();
    browser.pause(1000);
    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.click(component);

});
When(/^Я закрываю алерт$/, function () {
    browser.dismissAlert();

});

When(/^Я ввожу "([^"]*)" в "([^"]*)" на "([^"]*)"$/, (value, element, pageObject) => {

    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.clearValue(component);
    elementManager.setValue(component, dataTest[value]);

});

When(/^Я навожу курсор на "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {
    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.moveTo(component);
});

When(/^Я нажимаю ввод/, () => {
    browser.keys("\uE007");

});
When(/^Я скролю до "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {
    const component = browser.pageObjects[pageObject].elements[element];
    elementManager.scrollIntoView(component);
});
When(/^Я нажимаю назад$/, function () {
    browser.back();
});
When(/^Я очищаю поле/, () => {
    browser.keys("\uE005");

});