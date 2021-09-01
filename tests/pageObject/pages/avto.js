class Avto {

    constructor() {
        this.elements = {


            'Поиск Авто' : this.avtoSearch,
            'Марка' : this.marka,
            'Выбор Марок' : this.markList,
            'Автомобиль' : this.correctAvto,






        };
    }




    get correctAvto(){
        return ('(//*[@class="vehicle-form__description vehicle-form__description_middle vehicle-form__description_primary vehicle-form__description_font-weight_bold vehicle-form__description_premium-additional"])[1]')
    }
    get markList(){
        return ('(//*[@class="input-style__wrapper vehicle-form__input-wrapper vehicle-form__input-wrapper_width_full"])[4]')
    }
    get marka(){
        return ('//div[@class="dropdown-style dropdown-style_primary dropdown-style_small dropdown-style_right vehicle-form__dropdown vehicle-form__dropdown_width_sssm dropdown-style_visible"]/div[2]/div/div[3]/ul/li')
    }
    get avtoSearch(){
        return ('//div[@class="dropdown-style dropdown-style_primary dropdown-style_small dropdown-style_right vehicle-form__dropdown vehicle-form__dropdown_width_sssm dropdown-style_visible"]/div/div/input')
    }







}


module.exports = new Avto();