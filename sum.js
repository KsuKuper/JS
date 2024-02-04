// const calculateBonus = (a, b) => {
//   let bonus;
//   const sum = a + b;
//   debugger;

//   if (isNaN(sum) || a === "" || b === "") {
//     return 0;
//   }
//   sum > 50 ? (bonus = 50) : (bonus = sum);
//   debugger;

//   return bonus;
// };
// console.log(calculateBonus(20, 40));

const calculateBonus = (a, b) => {
  if (
    a === null ||
    a === undefined ||
    isNaN(a) ||
    a === "" ||
    b === undefined ||
    isNaN(b) ||
    b === ""
  ) {
    return 0;
  }
  const sum = a + b;
  let bonus;
  debugger;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;
  return bonus;
};
console.log(calculateBonus(20, 40));

module.exports = calculateBonus;
