const getSelectors = require('./../../../helper/getSelectors');
class heder {

    constructor() {
        this.elements = {
            'Войти' : this.logIn,
            'Информация О Новости' : this.infoNews,
            'Автобарахолка' : this.avtoPage,
            'Каталог' : this.catalog,
            'Квартиры' : this.flats,
            'Перейти В Корзину' : this.inCart,
            'Избранное' : this.favorite,
            'Боковое Меню' : this.sideBar,



        };
    }

    get logIn() {
        return getSelectors( '[class="auth-bar__item auth-bar__item--text"]','[class="header-style__enter"]');
    }
    // '[class="auth-bar__item auth-bar__item--text"]'
    get infoNews(){
        return ('//*[@class="news__title"]');
    }
    get avtoPage(){
        return ('(//*[@class="b-main-navigation__link"])[3]')
    }
    get catalog(){
        return ('(//*[@class="b-main-navigation__link"])[1]')
    }
    get flats(){
        return ('(//*[@class="b-main-navigation__link"])[4]')
    }
    get inCart(){
        return ('[class="b-top-profile__cart"]')
    }
    get favorite(){
        return ('[class="b-top-profile__favorites"]')
    }
    get sideBar(){
        return ('[class="header-style__underlay"]')
    }



}


module.exports = new heder();