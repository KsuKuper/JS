Function Declaration
Первый способ — просто объявить функцию в коде (Function Declaration):

```javascript
function isHello(name) {
  console.log(`Hi! ${name} 😊`);
}
isHello("Ksu Kuper");
```

output
[Running] node "/Users/ksukuper/JS/JS/tempCodeRunnerFile.js"
Hi! Ksu Kuper 😊

Код, представляет собой функцию `hello`, которая принимает аргумент `name` и выводит приветственное сообщение в консоль. Разберем его пошагово:

1. Создание функции `hello`:

```javascript
function isHello(name) {
```

Эта строка определяет функцию с именем `hello`, которая принимает один аргумент `name`.

2. Вывод сообщения в консоль:

```javascript
console.log(`Hi! ${name} 😊`);
```

Эта строка использует функцию `console.log` для вывода строки `Hi!` вместе с значением аргумента `name`. Значение `name` вставляется в строку с помощью синтаксиса шаблонной строки `${name}`.

3. Вызов функции `hello`:

```javascript
isHello("Ksu Kuper");
```

Эта строка вызывает функцию `isHello` с аргументом `"Ksu Kuper"`.
Это означает, что строка `"Ksu Kuper"` будет передана в функцию в качестве значения аргумента `name`.
В результате выполнения этого кода в консоли будет выведено сообщение `Hi! Ksu Kuper 😊`.
Оно использует значение аргумента, переданное при вызове функции.

Function Expression
Второй — создать функциональное выражение (Function Expression).
Это похоже на первый способ, но здесь функция становится значением переменной:

```javascript
const hello = function (name) {
  console.log(`Hi! ${name} 😊`);
};
hello("Ksu Kuper");
```

output
[Running] node "/Users/ksukuper/JS/JS/tempCodeRunnerFile.js"
Hi! Ksu Kuper 😊

Примеры, связанные с зоной видимости

```javascript
isHello("Ksu Kuper");

function isHello(name) {
  console.log(`Hi! ${name} 😊`);
}
```

output
Hi! Ksu Kuper 😊

```javascript
hello("Ksu Kuper");

const hello = function (name) {
  console.log(`Hi! ${name} 😊`);
};
```

output
ReferenceError: Cannot access 'hello' before initialization

В JavaScript есть два типа функций по признаку имени.
В примере ниже функция называется именованной, потому что у неё есть имя.

function namedFunction() {}

Противоположность именованным функциям — анонимные. У таких имени нет:

function() {}

Параметры в функциях
При вызове функции можно передать данные, они будут использованы кодом внутри.

Например, функция `showMessage принимает два параметра под названиями `user`и`message, а потом соединяет их для целого сообщения.

```javascript
function showMessage(user, message) {
  console.log(user + ": " + message);
}
```

При вызове функции ей нужно передать аргументы.
Функцию можно вызывать сколько угодно раз с любыми аргументами:

```javascript
showMessage("Маша", "Привет!");
```

output
Маша: Привет!

```javascript
showMessage("Иван", "Как делишки?");
```

output
Иван: Как делишки?
