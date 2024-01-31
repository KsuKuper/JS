const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger;

  if (isNaN(sum) || a === "" || b === "") {
    return 0;
  }
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger;

  return bonus;
};
console.log(calculateBonus(20, 40));

module.exports = calculateBonus;
