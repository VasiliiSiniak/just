# language: ru
@login
Функция: Логин
  Сценарий: Логин на онлайнер
  Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Войти" на "Хедер"
    Когда Я ввожу "Логин" в "Поле Email" на "Регистрация"
    Когда Я ввожу "Пароль" в "Поле Пароль" на "Регистрация"
    Когда Я нажимаю "Кнопка Войти" на "Регистрация"
    Тогда Я вижу "Имя Профиля" на "Главная Страница"
