// ./function.md line 4

function isHello(name) {
  console.log(`Hi! ${name} 😊`);
}
isHello("Ksu Kuper");

// ./function.md line 42
const hello = function (name) {
  console.log(`Hi! ${name} 😊`);
};
hello("Ksu Kuper");

// Примеры, связанные с зоной видимости

// isHello("Ksu Kuper");

// function isHello(name) {
//   console.log(`Hi! ${name} 😊`);
// }

// output
// Hi! Ksu Kuper 😊

// hello("Ksu Kuper");

// const hello = function (name) {
//   console.log(`Hi! ${name} 😊`);
// };

// output
// ReferenceError: Cannot access 'hello' before initialization

// Например, функция `showMessage принимает два параметра под названиями `user`и`message,
// а потом соединяет их для целого сообщения

function showMessage(user, message) {
  console.log(user + ": " + message);
}

showMessage("Ksu", "Hi!");
showMessage("Candy", "Hello!");

