const {  Then } = require('@cucumber/cucumber');
const elementManager = require('./../../services/elementManager')
const {assert, expect} = require('chai');
const dataTest = require('../../features/testData/valueData');



Then(/^Я вижу "([^"]*)" на "([^"]*)"$/, (element, pageObject) => {
    const component = browser.pageObjects[pageObject].elements[element];
    assert.strictEqual(elementManager.isDisplayed(component), true, `Кнопка ${element} не отображается`);
});

Then(/^Я вижу "([^"]*)" с текстом "([^"]*)" на "([^"]*)"$/, function (element, value, pageObject) {
    const component = browser.pageObjects[pageObject].elements[element];

    assert.include(elementManager.getText(component), dataTest[value],  'не совпадают')


});
Then(/^Я вижу, что "([^"]*)" корректна на "([^"]*)"$/, function (element, pageObject) {
    const component = browser.pageObjects[pageObject].elements[element];
    const value = +elementManager.getText(component).split("$", 1);
    console.log(value);
    assert.isAtMost(value, 500);
    assert.isAtLeast(value, 100);


});