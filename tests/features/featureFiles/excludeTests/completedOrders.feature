# language: ru
@login
Функция: Совершенные заказы
  Сценарий: Проверка отображения завершенных заказов и возможности оставить отзыв
  Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Войти" на "Хедер"
    Когда Я ввожу "Логин" в "Поле Email" на "Регистрация"
    Когда Я ввожу "Пароль" в "Поле Пароль" на "Регистрация"
    Когда Я нажимаю "Кнопка Войти" на "Регистрация"
    Тогда Я вижу "Имя Профиля" на "Главная Страница"
    Когда Я нажимаю "Профиль" на "Главная Страница"
    Когда Я нажимаю "История Заказов" на "Главная Страница"
    Когда Я нажимаю "Подробности Заказа" на "Главная Страница"
    Когда Я нажимаю "Отзыв О Магазине" на "Главная Страница"
    Тогда Я вижу "Поле Отзыва" на "Главная Страница"

