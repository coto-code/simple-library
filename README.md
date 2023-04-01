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
  * Статические файлы `static/`

## Своё название библиотеки

Для смены названия, нужно отредактировать ряд файлов

### `package.json`

Меняем поля: 

* name
* main

### `build/webpack.base.conf.js`

Меняем поля: 

* entry.simpleLibrary (свойство simpleLibrary меняем на своё название)
* output.library.name

### `build/webpack.prod.conf.js`

Меняем полe: 

* banner

### `src/scripts/index.js`

Меняем имя класса

### `playground/index.html`

Меняем вызов библиотеки (`new SimpleLibrary`)
