class ElementManager {


    click(selector) {
        this.waitForClickable(selector);
        this.waitForDisplayed(selector);
        const element = this.getElement(selector);
        return element.click();
    }

    elements(selector) {
        this.waitForClickable(selector);
        this.waitForDisplayed(selector);
        return $$(selector).length;
    }

    getElement(selector) {
        return $(selector);
    }


    getText(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.getText();
    }


    getValue(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.getValue();
    }

    getAttribute(selector, attributeName) {
        const element = $(selector);
        return element.getAttribute(attributeName);
    }


    getSize(selector) {
        const element = $(selector);
        return element.getSize();
    }


    setValue(selector, value) {
        const element = $(selector);
        this.waitForElement(selector);
        element.setValue(value);

    }

    clearValue(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        element.setValue(['Command', 'a']);
        return browser.keys(['Command', 'x']);
    }
    doubleClick(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        return element.doubleClick();
    }


    isDisplayed(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        this.waitForClickable(selector);
        return element.isDisplayed();
    }


    isClickable(selector) {
        const element = $(selector);
        this.waitForElement(selector);
        this.waitForClickable(selector);
        return element.isClickable();
    }


    isExisting(selector) {
        const element = $(selector);
        return element.isExisting();
    }


    waitForClickable(selector) {
        const element = this.getElement(selector);
        element.waitForExist();
        element.waitForClickable();
    }


    waitForElement(selector) {
        const element = this.getElement(selector);
        element.waitForExist();
        element.waitForDisplayed();
    }


    waitForDisplayed(selector) {
        const element = this.getElement(selector);
        element.waitForExist();
        element.waitForDisplayed();
    }


    scrollIntoView(selector) {
        const element = this.getElement(selector);
        return element.scrollIntoView({'block': 'center', 'inline': 'center'});
    }

    isSelected(selector) {
        const element = this.getElement(selector);
        this.waitForElement(selector);
        this.waitForClickable(selector);
        return element.isSelected();
    }


    isEnabled(selector, ms = 15000) {
        const element = this.getElement(selector);
        this.waitForElement(element, ms);
        return element.isEnabled();
    }
    clickApp(selector, ms = 15000) {
        this.waitForDisplayed(selector, ms);
        this.waitForClickable(selector, ms);
        const element = this.getElement(selector);
        return element.click();
    }

    moveTo(selector, ms = 15000) {
        const element = this.getElement(selector);
        return element.moveTo();
    }

}


module.exports = new ElementManager();
