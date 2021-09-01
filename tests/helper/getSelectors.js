module.exports = (desctopSelector, androidSelector, iosSelector ) => {
    if(browser.isMobile){
        if(browser.isAndroid){
            return androidSelector;
        }else {
            return iosSelector;
        }
    }else {
        return desctopSelector;
    }
};

