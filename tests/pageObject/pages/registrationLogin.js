class RegLog {

    constructor() {
        this.elements = {
            'Поле Email' : this.emailField,
            'Поле Пароль' : this.passwordField,
            'Кнопка Войти' : this.submitButton,
            'Поле Повторить Пароль' : this.confirmPasswordField,
            'Регистрация' : this.registration,
            'Подтвердить Email' : this.confirmEmail,


        };
    }


    get emailField(){
        return ('(//*[@class="auth-input auth-input_primary auth-input_base auth-form__input auth-form__input_width_full"])[1]');
    }
    get passwordField(){
        return ('(//*[@class="auth-input auth-input_primary auth-input_base auth-form__input auth-form__input_width_full"])[2]');
    }
    get confirmPasswordField(){
        return ('(//*[@class="auth-input auth-input_primary auth-input_base auth-form__input auth-form__input_width_full"])[2]');
    }
    get submitButton(){
        return ('//*[@class="auth-button auth-button_primary auth-button_middle auth-form__button auth-form__button_width_full"]');
    }
    get registration() {
        return ('(//*[@class="auth-form__link auth-form__link_primary auth-form__link_small"])[1]');
    }
    get confirmEmail() {
        return ('[class="auth-form__control auth-form__control_condensed-other"]');
    }

}


module.exports = new RegLog();