class Catalog {

    constructor() {
        this.elements = {

            'Первый Телевизор' : this.firstTel,
            'Добавить В Корзину' : this.addInCart,
            'Фильтр Сяоми' : this.filterXiaomi,
            'Телефон Xiaomi' : this.phoneXiaomi,
            'Электроника' : this.electoniс,
            'Категория Мобильные Телефоны' : this.mobileCat,
            'Мобильные Телефоны' : this.mobile,
            'Добавить В Избранное' : this.addInFavorite,
            'Товар В Избранном' : this.goodInFavorite,
            'Выделить Все' : this.selectAll,
            'Удалить Товары' : this.deleteGood,
            'Нет Закладок' : this.noGoods,
            'Вкладка Каталог' : this.bookCatalog,
            'Добавить Первый Товар В Сравнение' : this.addInComp1,
            'Добавить Второй Товар В Сравнение' : this.addInComp2,
            'Добавить Третий Товар В Сравнение' : this.addInComp3,
            'Переход В Сравнение' : this.inComp,
            'Первый Товар В Сравнении' : this.firstGood,
            'Второй Товар В Сравнении' : this.secondGood,
            'Третий Товар В Сравнении' : this.thirdGood,
            'Очистить Сравнение' : this.clearComp,










        };
    }




    get firstTel(){
        return ('(//*[@data-bind="html: product.extended_name || product.full_name"])[1]')
    }
    get addInCart(){
        return ('(//*[@class="button-style button-style_base-alter product-aside__item-button button-style_expletive"])[1]')
    }
    get filterXiaomi(){
        return ('(//*[@class="schema-filter__list"])[2]//li[1]//*[@class="schema-filter__checkbox-item"]')
    }
    get phoneXiaomi(){
        return ('(//*[@data-bind="html: product.extended_name || product.full_name"])[1]')
    }
    get electoniс(){
        return ('(//*[@class="catalog-navigation-classifier__item-title"])[1]')
    }
    get mobileCat(){
        return ('(//*[@class="catalog-navigation-list__aside-item"])[1]')
    }
    get mobile(){
        return ('(//*[@class="catalog-navigation-list__dropdown-title"])[1]')
    }
    get addInFavorite(){
        return ('(//*[@class="i-checkbox__faux"])[2]')
    }
    get goodInFavorite(){
        return ('[class="pdescr"]')
    }
    get selectAll(){
        return ('[id="selectAllBookmarks"]')
    }
    get deleteGood(){
        return ('[class="pmchk__del"]')
    }
    get noGoods(){
        return ('[style="font-size:18px; margin:1.5em 2em"]')
    }
    get bookCatalog(){
        return ('(//*[@class="gray-btn-segmented"])/li[5]')
    }
    get addInComp1(){
        return ('(//*[@class="schema-product__compare"])[1]')
    }
    get addInComp2(){
        return ('(//*[@class="schema-product__compare"])[4]')
    }
    get addInComp3(){
        return ('(//*[@class="schema-product__compare"])[6]')
    }
    get inComp(){
        return ('[class="compare-button__sub compare-button__sub_main"]')
    }
    get firstGood(){
        return ('(//*[@class="product-summary"])[1]')
    }
    get secondGood(){
        return ('(//*[@class="product-summary"])[2]')
    }
    get thirdGood(){
        return ('(//*[@class="product-summary"])[3]')
    }
    get clearComp(){
        return ('[class="product-table__clear button button_small button_gray"]')
    }
    get home(){
        return ('[class="catalog-navigation__title"]')
    }











}


module.exports = new Catalog();