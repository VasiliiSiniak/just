class Cart {

    constructor() {
        this.elements = {

            'Товар В Корзине' : this.goodInCart,
            'Товар Удален' : this.goodDeleted,
            'Удалить Товар' : this.deleteGood,
            'Количество Товаров' : this.numberGoods,






        };
    }



    get goodInCart(){
        return ('[class="button-style button-style_primary button-style_small cart-form__button"]')
    }
    get goodDeleted(){
        return ('[class="cart-form__link cart-form__link_other cart-form__link_small"]')
    }
    get deleteGood(){
        return ('[class="button-style button-style_auxiliary button-style_small cart-form__button cart-form__button_remove"]')
    }
    get numberGoods(){
        return ('[class="cart-form__description cart-form__description_primary cart-form__description_base cart-form__description_condensed-other helpers_hide_tablet"]')
    }





}


module.exports = new Cart();