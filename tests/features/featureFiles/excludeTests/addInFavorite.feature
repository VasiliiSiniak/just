# language: ru
@login
Функция: Избранное
  Сценарий: Добавление товара в избранное
    Пусть Я нахожусь на главной странице
    Когда Я нажимаю "Войти" на "Хедер"
    Когда Я ввожу "Логин" в "Поле Email" на "Регистрация"
    Когда Я ввожу "Пароль" в "Поле Пароль" на "Регистрация"
    Когда Я нажимаю "Кнопка Войти" на "Регистрация"
    Тогда Я вижу "Имя Профиля" на "Главная Страница"
    Когда Я нажимаю "Категория Телевизоры" на "Главная Страница"
    Когда Я нажимаю "Первый Телевизор" на "Каталог"
    Когда Я нажимаю "Добавить В Избранное" на "Каталог"
    Когда Я нажимаю "Избранное" на "Хедер"
    Когда Я нажимаю "Вкладка Каталог" на "Каталог"
    Тогда Я вижу "Товар В Избранном" на "Каталог"
    Когда Я нажимаю "Выделить Все" на "Каталог"
    Когда Я нажимаю "Удалить Товары" на "Каталог"
    Тогда Я вижу "Нет Закладок" с текстом "Нет Закладок" на "Каталог"





