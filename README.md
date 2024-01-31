Инструкция по установке, настройке и запуску проекта с использованием npm, а также по запуску тестов с помощью Jest:

1: Установка npm
Перед установкой и запуском проекта необходимо убедиться, что установлен Node.js и npm (Node Package Manager).
Проверить их наличие, выполнив следующие команды в командной строке:

```shell
node -v
npm -v
```

Если они не установлен, официальный веб-сайт Node.js (https://nodejs.org/), загрузить и установить соответствующую для операционной системы версию.

2: Создание проекта

1. Создать новую пустую директорию для проекта.
2. В командной строке перейти в эту директорию.
3. Выполнить команду, чтобы инициализировать новый проект npm:

```shell
npm init
```

Эта команда создаст `package.json` файл, в котором будут храниться информация о проекте и его зависимостях.

3: Установка зависимостей

1. Установите Jest как зависимость разработки, выполнив следующую команду:

```shell
npm install --save-dev jest
```

Эта команда установит Jest в проект и добавит его в раздел "devDependencies" в `package.json`.
Отредактировать файл package.json для запуска из командной строки:

```javascript
 "scripts": {
    "test": "jest" - исправить значение ключа "test" на "jest"
  },
```

2. Создать файл `calculateBonus.js` и добавьте в него код функции `calculateBonus`.

4: Создать тесты

1. Создайте файл `calculateBonus.test.js` или `calculateBonus.spec.js`, в котором будут содержаться тесты.
2. В этом файле напиcfnm тесты с использованием Jest.

5: Запуск тестов
В командной строке выполните следующую команду, чтобы запустить тесты:

```shell
npx jest
```

или

```shell
npm run test
```

Jest автоматически найдет и запустит все файлы с расширением `.test.js` или `.spec.js` в проекте.

Первый тест

Для проведения тестирования:

1. Создаем функцию которую будем тестировать
2. Создаем первый базовый тест с расширением .test.js или .spec.js

Тестируемая функция

Добавляем тестируемую функцию

function sum(a, b) {
return a + b;
}

Экспортируем ее:

module.exports = sum;

Импортируем в тесты

const sum = require("./sum");

test(“Sum of two positive nums”, () => {
expect(sum(4, 8)).toBe(12);
});

output
запустить тест
npx jest или npm run test

MacBook-Pro-Kseniya:JS ksukuper$ npm run test

> js@1.0.0 test
> jest

console.log
50

      at Object.log (sum.js:14:9)

PASS ./sum.spec.js
✓ Calculate bonus - sum > 50 (3 ms)
✓ Calculate bonus - sum <= 50 (1 ms)
✓ Calculate bonus - a = 0
✓ Calculate bonus - b = 0
✓ Calculate bonus - a = b = 0 (1 ms)
✓ Calculate bonus - negative values
✓ Calculate bonus - empty values (1 ms)
✓ Non-numeric values as input should return 0
✓ Should return the correct bonus when input is decimal numbers

Test Suites: 1 passed, 1 total
Tests: 9 passed, 9 total
Snapshots: 0 total
Time: 0.453 s, estimated 1 s
Ran all test suites.
