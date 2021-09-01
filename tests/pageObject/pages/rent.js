class Rent {

    constructor() {
        this.elements = {


            'Комната' : this.room,
            'Цена От' : this.priceFrom,
            'Цена До' : this.priceTo,
            'Первая Комната' : this.firstRoom,
            'Аренда' : this.rent,
            'Цена Комнаты' : this.price,






        };
    }



    get rent(){
        return ('(//*[@class="project-navigation__link project-navigation__link_primary"])[2]')
    }
    get room(){
        return ('(//*[@class="filter__item-inner"])[2]')
    }
    get priceFrom(){
        return ('[id="search-filter-price-from"]')
    }
    get priceTo(){
        return ('[id="search-filter-price-to"]')
    }
    get firstRoom(){
        return ('(//*[@class="classified__figure"])[1]')
    }
    get price(){
        return ('[class="apartment-bar__price-value apartment-bar__price-value_complementary"]')
    }





}


module.exports = new Rent();