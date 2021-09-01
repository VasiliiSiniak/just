class Search {

    constructor() {
        this.elements = {
            'Мобильные Телефоны' : this.mobilePhone,








        };
    }




    get firstTel(){
        return ('(//*[@data-bind="html: product.extended_name || product.full_name"])[1]')
    }
    get addInCart(){
        return ('(//*[@class="button-style button-style_base-alter product-aside__item-button button-style_expletive"])[1]')
    }
    get mobilePhone(){
        return ('[class="category__title"]')
    }






}


module.exports = new Search();