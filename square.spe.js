// const square = require("./square");

// describe("Тестирование ax2 + bx + c = 0", () => {
//   it("D > 0", () => {
//     result = [4, -1];
//     expect(square(1, -3, -4)).toEqual(result);
//   });
//   it("D == 0", () => {
//     expect(square(9, 6, 1)).toEqual(-27);
//   });
//   it("D < 0", () => {
//     expect(square(9, 6, 2)).toEqual("корней нет");
//   });
// });

// describe("Тестирование ax2 + bx + c = 0", () => {
//   it.each([
//     [1, -3, -4, [4, -1]],
//     [9, 6, 1, -27],
//     [9, 6, 2, "корней нет"],
//   ])("Переменные значения %p, полученные корни %p", (a, b, c, result) => {
//     expect(square(a, b, c)).toEqual(result);
//   });
// });

// describe("Тестирование ax2 + bx + c = 0 - литеральный синтаксис", () => {
//   it.each`
//     a    | b     | c     | result
//     ${1} | ${-3} | ${-4} | ${[4, -1]}
//     ${9} | ${6}  | ${1}  | ${-27}
//     ${9} | ${6}  | ${2}  | ${"корней нет"}
//   `(`Значения $a, $b, $c, результаты $result`, ({ a, b, c, result }) => {
//     expect(square(a, b, c)).toEqual(result);
//   });
// });
