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
      if (!student || typeof student !== "object") {
        return;
      }
      if (student.score > maxScore) {
        maxScore = student.score;
        maxScoreStudents = [student];
      } else if (student.score === maxScore) {
        maxScoreStudents.push(student);
      }
    });
  });
  return maxScoreStudents;
}
let maxScoreStudents = findMaxScoreStudents(studentsData);
if (maxScoreStudents.length === 1) {
  const { name, score } = maxScoreStudents[0];
  console.log(
    `Поздравления для студента ${name} с максимальным количеством баллов ${score}!`
  );
} else {
  console.log("Несколько студентов имеют максимальное количество баллов:");
  maxScoreStudents.forEach(({ name, score }) => {
    console.log(`${name} - ${score}`);
  });
}

module.exports = findMaxScoreStudents;
