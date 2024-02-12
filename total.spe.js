const total = require("./total");
describe("Тестирование nds", () => {
  let fn;
  beforeEach(() => {
    const callCount = { count: 0 };
    fn = jest.fn((x) => {
      if (typeof x === "number") {
        console.log("fn called with:", x);
        return x * 1.2;
      } else {
        return NaN;
      }
    });
  });
  test("Вызов функции nds", () => {
    total([500, 750, 2500, 5000], fn);
    expect(fn).toBeCalled();
  });
  test("Проверка количества вызовов nds", () => {
    total([500, 750, 2500, 5000], fn);
    expect(fn).toBeCalledTimes(4);
  });
  test("Проверка работы ф-ции nds", () => {
    total([500, 750, 2500, 5000], fn);
    expect(fn.mock.results[0].value).toBe(600);
    expect(fn.mock.results[1].value).toBe(900);
    expect(fn.mock.results[2].value).toBe(3000);
    expect(fn.mock.results[3].value).toBe(6000);
  });
  test("Пустой список покупок", () => {
    const shoplist = [];
    const result = total(shoplist, fn);
    expect(result).toEqual([]);
    expect(fn).not.toBeCalled();
  });
  test("Список покупок с одним элементом", () => {
    const shoplist = [500];
    const result = total(shoplist, fn);
    expect(result).toEqual([600]);
    expect(fn).toBeCalledTimes(1);
  });
  test("Список покупок с отрицательными значениями", () => {
    const shoplist = [500, -750, 2500, -5000];
    const result = total(shoplist, fn);
    expect(result).toEqual([600, -900, 3000, -6000]);
    expect(fn).toBeCalledTimes(4);
  });
  test("Список покупок с нулевыми значениями", () => {
    const shoplist = [0, 0, 0, 0];
    const result = total(shoplist, fn);
    expect(result).toEqual([0, 0, 0, 0]);
    expect(fn).toBeCalledTimes(4);
  });
  test("Мокаем значение fn", () => {
    fn.mockReturnValueOnce("One")
      .mockReturnValueOnce("Two")
      .mockReturnValueOnce("Three")
      .mockReturnValue("Total");
    expect(fn()).toBe("One");
    expect(fn()).toBe("Two");
    expect(fn()).toBe("Three");
    expect(fn()).toBe("Total");
  });
});
