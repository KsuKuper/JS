const calculateBonus = require("./sum");
// 1. Проверка, что функция возвращает ожидаемое значение, когда сумма `a` и `b` больше 50:
test("Calculate bonus - sum > 50", () => {
  expect(calculateBonus(30, 40)).toBe(50);
});

// 2. Проверка, что функция возвращает ожидаемое значение, когда сумма `a` и `b` меньше или равна 50:

test("Calculate bonus - sum <= 50", () => {
  expect(calculateBonus(10, 20)).toBe(30);
});

// 3. Проверка, что функция возвращает ожидаемое значение, когда `a` равно 0:

test("Calculate bonus - a = 0", () => {
  expect(calculateBonus(0, 20)).toBe(20);
});

// 4. Проверка, что функция возвращает ожидаемое значение, когда `b` равно 0:

test("Calculate bonus - b = 0", () => {
  expect(calculateBonus(20, 0)).toBe(20);
});

// 5. Проверка, что функция возвращает ожидаемое значение, когда `a` и `b` равны 0:
//
test("Calculate bonus - a = b = 0", () => {
  expect(calculateBonus(0, 0)).toBe(0);
});

// 6. Проверка, что функция возвращает ожидаемое значение, когда `a` и `b` являются отрицательными числами:

test("Calculate bonus - negative values", () => {
  expect(calculateBonus(-10, -20)).toBe(-30);
});

// 7. Проверка, что функция возвращает ожидаемое значение, когда `a` или `b` не введены или равны пустой строке:

test("Calculate bonus - empty values", () => {
  expect(calculateBonus("", 10)).toBe(0);
  expect(calculateBonus(20, "")).toBe(0);
  expect(calculateBonus("", "")).toBe(0);
});

// 8. Проверка ввода нечисловых значений

test("Non-numeric values as input should return 0", () => {
  expect(calculateBonus("abc", 30)).toBe(0);
  expect(calculateBonus(40, "def")).toBe(0);
  expect(calculateBonus("xyz", "123")).toBe(0);
});

// 9. Проверка ввода дробных числовых значений

test("Should return the correct bonus when input is decimal numbers", () => {
  expect(calculateBonus(12.5, 37.5)).toBe(50);
  expect(calculateBonus(60.2, 10.3)).toBe(50);
  expect(calculateBonus(88.6, 22.4)).toBe(50);
});

// 10. Проверка ввода null

test("Calculate bonus - a is null", () => {
  expect(calculateBonus(null, 20)).toBe(0);
});

// 11. Проверка ввода undefiend

test("Calculate bonus - b is undefined", () => {
  expect(calculateBonus(10, undefined)).toBe(0);
});
