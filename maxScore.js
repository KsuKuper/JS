// const studentsData = require("./studentsData.json");
// function findMaxScoreStudents(studentsData) {
//   let maxScore = 0;
//   let maxScoreStudents = [];
//   for (let i = 0; i < studentsData.length; i++) {
//     let studentGroup = studentsData[i];
//     for (let j = 0; j < studentGroup.length; j++) {
//       let student = studentGroup[j];
//       if (student.score > maxScore) {
//         maxScore = student.score;
//         maxScoreStudents = [student];
//       } else if (student.score === maxScore) {
//         maxScoreStudents.push(student);
//       }
//     }
//   }
//   return maxScoreStudents;
// }
// let maxScoreStudents = findMaxScoreStudents(studentsData);
// if (maxScoreStudents.length === 1) {
//   const maxScoreStudent = maxScoreStudents[0];
//   console.log(
//     "Поздравления для студента " +
//       maxScoreStudent.name +
//       " с максимальным количеством баллов " +
//       maxScoreStudent.score +
//       "!"
//   );
// } else {
//   console.log("Несколько студентов имеют максимальное количество баллов:");
//   for (let i = 0; i < maxScoreStudents.length; i++) {
//     const student = maxScoreStudents[i];
//     console.log(student.name + " - " + student.score);
//   }
// }

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

