class MainPage {

    constructor() {
        this.elements = {

            'Имя Профиля' : this.userAvatar,
            'Категория Телевизоры' : this.tel,
            'Автобарахолка' : this.avtoPage,


            'Строка Поиска' : this.searchRow,
            'Главная Страница' : this.home,
            'Профиль' : this.profile,
            'История Заказов' : this.history,
            'Подробности Заказа' : this.details,
            'Отзыв О Магазине' : this.review,
            'Поле Отзыва' : this.reviewField,





        };
    }


    get userAvatar() {
        return ('[class="b-top-profile__image js-header-user-avatar"]');
    }
    get tel() {
        return ('(//*[@class="project-navigation__sign"])[1]')
    }


    get searchRow(){
        return ('[class="fast-search__input"]')
    }
    get avtoPage(){
        return ('(//*[@class="b-main-navigation__link"])[3]')
    }
    get home(){
        return ('[class="catalog-navigation__title"]')
    }
    get profile(){
        return ('[class="b-top-profile__preview js-toggle-bar"]')
    }
    get history(){
        return ('(//*[@class="b-top-profile__link b-top-profile__link_alter"])[3]')
    }
    get details(){
        return ('(//*[@class="button-style button-style_appendant button-style_small cart-form__button"])[1]')
    }
    get review(){
        return ('(//*[@class="button-style button-style_primary button-style_small cart-form__button"])[1]')
    }
    get reviewField(){
        return ('[class="g-input b-reviews-form__table__cell__input _review _help"]')
    }










}


module.exports = new MainPage();