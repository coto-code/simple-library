# Simple library

Заготовка для создания javascript библиотеки с использованием [webpack](https://webpack.js.org/).

## Установка зависимостей

```bash
npm ci
```

## Комнады

### Режим разработки

```bash
npm run dev
```

После запуска, доступна песочница с подключённой библиотекой.

Адрес: [http://localhost:8000/](http://localhost:8000/)

### Собрать библиотеку

```bash
npm run build
```

## Файловая структура исходных файлов

* **Библиотека**
  * Скрипты `src/scripts`
  * Стили `src/styles`

* **Песочница**
  * Html страничка `playground/index.html`
  * Статические файлы `static`
