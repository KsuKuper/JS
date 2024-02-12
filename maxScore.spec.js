const findMaxScoreStudents = require("./maxScore", "jest-mock-console");

describe("findMaxScoreStudents", () => {
  const studentsData = [
    [
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 5, date: "2022-10-10" },
      { name: "Olga", score: 0, date: "" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
      { name: "Oleg", score: 9, date: "2022-10-01" },
      { name: "Zanna", score: 15, date: "2022-10-11" },
    ],
    [
      { name: "Margo", score: 0, date: "2022-10-11" },
      { name: "Natalia", score: 25, date: "2022-10-10" },
      { name: "Marina", score: 25, date: "2022-10-01" },
      { name: "Dmitry", score: 25, date: "2022-10-12" },
      { name: "Denis", score: 0, date: "2022-10-02" },
      { name: "Vadimyr", score: 1, date: "2022-10-11" },
    ],
    [
      { name: "Irina", score: 0, date: "2022-10-11" },
      { name: "Vasily", score: 0, date: "2022-10-10" },
      { name: "David", score: 0, date: "2022-10-11" },
      { name: "Kristina", score: 0, date: "2022-10-12" },
      { name: "Varvaraa", score: 0, date: "2022-10-01" },
      { name: "Tanya", score: 0, date: "2022-10-11" },
    ],
  ];

  // 1. Тест для проверки нахождения студента с максимальным количеством баллов:

  it("Проверка нахождения студента с максимальным количеством баллов", () => {
    const studentsData = [
      [{ name: "Ivan", score: 35, date: "2022-10-11" }],
      [{ name: "Maria", score: 5, date: "2022-10-10" }],
      [{ name: "Olga", score: 0, date: "" }],
      [{ name: "Stepan", score: 0, date: "2022-10-12" }],
      [{ name: "Oleg", score: 9, date: "2022-10-01" }],
    ];
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    expect(maxScoreStudents.length).toBe(1);
    expect(maxScoreStudents[0]).toEqual({
      name: "Ivan",
      score: 35,
      date: "2022-10-11",
    });
  });

  // 2. Тест для проверки нахождения нескольких студентов с одинаковым максимальным количеством баллов:

  it("Проверка нахождения нескольких студентов с одинаковым максимальным количеством баллов", () => {
    const studentsData = [
      [{ name: "Ivan", score: 35, date: "2022-10-11" }],
      [{ name: "Maria", score: 35, date: "2022-10-10" }],
      [{ name: "Olga", score: 0, date: "" }],
      [{ name: "Stepan", score: 35, date: "2022-10-12" }],
      [{ name: "Oleg", score: 9, date: "2022-10-01" }],
    ];
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    expect(maxScoreStudents.length).toBe(3);
    expect(maxScoreStudents).toEqual([
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Maria", score: 35, date: "2022-10-10" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
    ]);
  });

  // 3. Тест для проверки нахождения студента с нулевым количеством баллов:

  it("Проверка нахождения студента с нулевым количеством баллов", () => {
    const studentsData = [
      [{ name: "Ivan", score: 0, date: "2022-10-11" }],
      [{ name: "Maria", score: 5, date: "2022-10-10" }],
      [{ name: "Olga", score: 0, date: "" }],
      [{ name: "Stepan", score: 0, date: "2022-10-12" }],
      [{ name: "Oleg", score: 9, date: "2022-10-01" }],
    ];
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    expect(maxScoreStudents.length).toBe(1);
    expect(maxScoreStudents[0]).toEqual({
      name: "Oleg",
      score: 9,
      date: "2022-10-01",
    });
  });

  // 4. Тест для проверки нахождения студентов с пустыми данными:

  it("Проверка нахождения студентов с пустыми данными", () => {
    const studentsData = [[], [], [], [], []];
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    expect(maxScoreStudents.length).toBe(0);
  });

  // 5. Тест для проверки нахождения студента с отрицательным количеством баллов:

  it("Проверка нахождения студента с отрицательным количеством баллов", () => {
    const studentsData = [
      [{ name: "Ivan", score: -5, date: "2022-10-11" }],
      [{ name: "Maria", score: 5, date: "2022-10-10" }],
      [{ name: "Olga", score: 0, date: "" }],
      [{ name: "Stepan", score: 0, date: "2022-10-12" }],
      [{ name: "Oleg", score: 9, date: "2022-10-01" }],
    ];
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    expect(maxScoreStudents.length).toBe(1);
    expect(maxScoreStudents[0]).toEqual({
      name: "Oleg",
      score: 9,
      date: "2022-10-01",
    });
  });

  // 6. Тест для проверки нахождения студента с null:

  it("Проверка c null", () => {
    const result = findMaxScoreStudents(null);
    expect(result).toEqual([]);
  });

  // 7. Тест для проверки нахождения студента с undefined:

  it("Проверка c undefined", () => {
    const result = findMaxScoreStudents(undefined);
    expect(result).toEqual([]);
  });

  //   8. Тест проверки игнорирования не валидных студентов

  test("Не валидные студенты", () => {
    const studentsData = [
      [{ name: "John", score: 80 }],
      null,
      [{ name: "Sarah", score: 95 }],
      undefined,
      "notArray",
    ];
    expect(findMaxScoreStudents(studentsData)).toEqual([
      { name: "Sarah", score: 95 },
    ]);
  });

  //  9. Тест проверки если передан массив, содержащий в себе не объекты

  it("Проверка возврата пустого массива, если studentsData содержит неправильные данные", () => {
    const studentsData = [["hi"]];
    const result = findMaxScoreStudents(studentsData);
    expect(result).toEqual([]);
  });

  // 10. Тест, что функция `findMaxScoreStudents` возвращает правильный список студентов с максимальным баллом из предоставленных данных о студентах

  it("Проверка вывода список студентов с максимальным баллом из предоставленных данных о студентах", () => {
    const studentsData = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
        { name: "Stepan", score: 35, date: "2022-10-12" },
        { name: "Oleg", score: 9, date: "2022-10-01" },
        { name: "Zanna", score: 15, date: "2022-10-11" },
      ],
      [
        { name: "Margo", score: 0, date: "2022-10-11" },
        { name: "Natalia", score: 25, date: "2022-10-10" },
        { name: "Marina", score: 25, date: "2022-10-01" },
        { name: "Dmitry", score: 25, date: "2022-10-12" },
        { name: "Denis", score: 0, date: "2022-10-02" },
        { name: "Vadimyr", score: 1, date: "2022-10-11" },
      ],
      [
        { name: "Irina", score: 0, date: "2022-10-11" },
        { name: "Vasily", score: 0, date: "2022-10-10" },
        { name: "David", score: 0, date: "2022-10-11" },
        { name: "Kristina", score: 0, date: "2022-10-12" },
        { name: "Varvaraa", score: 0, date: "2022-10-01" },
        { name: "Tanya", score: 0, date: "2022-10-11" },
      ],
    ];
    const result = findMaxScoreStudents(studentsData);
    expect(result).toEqual([
      { name: "Ivan", score: 35, date: "2022-10-11" },
      { name: "Stepan", score: 35, date: "2022-10-12" },
    ]);
  });

  // 11. Один студент с максимальным количеством баллов

  it("Проверка, если один студент имеют максимальное кол-во баллов", () => {
    const studentsData = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
      ],
    ];
    const spyLog = jest.spyOn(console, "log");
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    if (maxScoreStudents.length === 1) {
      const { name, score } = maxScoreStudents[0];
      console.log(
        `Поздравления для студента ${name} с максимальным количеством баллов ${score}!`
      );
    }
    expect(spyLog).toHaveBeenCalledWith(
      "Поздравления для студента Ivan с максимальным количеством баллов 35!"
    );
    spyLog.mockRestore();
  });

  // 12. Несколько студентов с максимальным количеством баллов

  it("Проверка, если несколько студентов имеют максимальное кол-во баллов", () => {
    const studentsData = [
      [
        { name: "Ivan", score: 35, date: "2022-10-11" },
        { name: "Stepan", score: 35, date: "2022-10-11" },
        { name: "Maria", score: 5, date: "2022-10-10" },
        { name: "Olga", score: 0, date: "" },
      ],
    ];
    const spyLog = jest.spyOn(console, "log");
    const maxScoreStudents = findMaxScoreStudents(studentsData);
    if (maxScoreStudents.length >= 1) {
      console.log("Несколько студентов имеют максимальное количество баллов:");
      maxScoreStudents.forEach(({ name, score }) => {
        console.log(`${name} - ${score}`);
      });
    }
    expect(spyLog).toHaveBeenCalledWith(
      "Несколько студентов имеют максимальное количество баллов:"
    );
    maxScoreStudents.forEach(({ name, score }) => {
      expect(spyLog).toHaveBeenCalledWith(`${name} - ${score}`);
    });
    spyLog.mockRestore();
  });
});
