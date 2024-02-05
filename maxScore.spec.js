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
});

//   const console = require("console");

//   it("should log congratulations message for a single student", () => {
//     // Enable console mocking
//     console.log = jest.fn();
//     // Test data
//     const studentsData = [
//       [
//         { name: "John", score: 90 },
//         { name: "Jane", score: 85 },
//         { name: "Alice", score: 95 },
//       ],
//       [
//         { name: "Bob", score: 75 },
//         { name: "Mike", score: 85 },
//         { name: "Sarah", score: 90 },
//       ],
//     ];
//     // Call the function and get the result
//     findMaxScoreStudents(studentsData);
//     // Assert console.log calls
//     expect(console.log.mock.calls.length).toBe(0);
//     // Get the logged message
//     const message = console.log.mock.calls[0][0];
//     // Expected message
//     const expectedMessage =
//       "Поздравления для студента Alice с максимальным количеством баллов 95!";
//     expect(message).toBe(expectedMessage);
//     // Disable console mocking
//     jest.restoreAllMocks();
//   });

//   it("should log multiple students with maximum scores", () => {
//     // Enable console mocking
//     console.log = jest.fn();
//     // Test data
//     const studentsData = [
//       [
//         { name: "John", score: 90 },
//         { name: "Jane", score: 85 },
//         { name: "Alice", score: 90 },
//       ],
//       [
//         { name: "Bob", score: 75 },
//         { name: "Mike", score: 85 },
//         { name: "Sarah", score: 90 },
//       ],
//     ];
//     // Call the function and get the result
//     findMaxScoreStudents(studentsData);
//     // Assert console.log calls
//     expect(console.log.mock.calls.length).toBe(0);
//     // Get the logged message
//     const message = console.log.mock.calls[0][0];
//     // Expected message
//     const expectedMessage =
//       "Несколько студентов имеют максимальное количество баллов:\nJohn - 90\nAlice - 90\nSarah - 90";
//     expect(message).toBe(expectedMessage);
//     // Disable console mocking
//     jest.restoreAllMocks();
//   });
// });
