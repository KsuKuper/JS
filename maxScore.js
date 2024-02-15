const studentsData = require("./studentsData.json");
function findMaxScoreStudents(studentsData) {
  if (!studentsData || !Array.isArray(studentsData)) {
    return [];
  }
  let maxScore = 0;
  let maxScoreStudents = [];
  studentsData.forEach((studentGroup) => {
    if (!studentGroup || !Array.isArray(studentGroup)) {
      return;
    }
    studentGroup.forEach((student) => {
      if (student.score > maxScore) {
        maxScore = student.score;
        maxScoreStudents = [student];
      } else if (student.score === maxScore) {
        maxScoreStudents.push(student);
      }
    });
  });
  if (maxScoreStudents.length == 1) {
    const { name, score } = maxScoreStudents[0];
    console.log(
      `Поздравляю студента ${name} с максимальным количеством баллов ${score}!`
    );
  } else {
    let fastestStudent = maxScoreStudents[0];
    maxScoreStudents.forEach((student) => {
      if (student.date < fastestStudent.date) {
        fastestStudent = student;
      }
    });
    const { name, score } = fastestStudent || {};
    console.log(
      `Поздравляю самого результативного и быстрого студента ${name} с максимальным количеством баллов ${score}!`
    );
  }
  return maxScoreStudents;
}

findMaxScoreStudents(studentsData);

module.exports = findMaxScoreStudents;
