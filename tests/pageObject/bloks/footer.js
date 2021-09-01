class Catalog {

    constructor() {
        this.elements = {

            'О Компании' : this.about,
            'Контакты' : this.contacts,
            'Вакансии' : this.work,
            'Манифест' : this.manifest,
            'Пользовательское Соглашение' : this.termsOfUse,
            'Публичные договоры' : this.publicContracts,
            'Политика Конфиденциальности' : this.privacy,
            'Поддержка' : this.support,
            'Правила Возврата' : this.rules,
            'Тайтл' : this.title,





        };
    }




    get about(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[1]')
    }
    get contacts(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[2]')
    }
    get work(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[3]')
    }
    get manifest(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[4]')
    }
    get termsOfUse(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[5]')
    }
    get publicContracts(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[6]')
    }
    get privacy(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[7]')
    }
    get support(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[8]')
    }
    get rules(){
        return ('(//*[@class="footer-style__link footer-style__link_primary"])[9]')
    }
    get title(){
        return ('[class="news-header__title"]')
    }











}


module.exports = new Catalog();