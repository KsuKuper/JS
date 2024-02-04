const totalAmount = -0.0;
const calculateInputsTotal = -0.01;
const calculateTotal = (totalAmount, calculateInputsTotal) => {
  const calculatedTotal = totalAmount - calculateInputsTotal;
  const absoluteTotal = Math.max(calculatedTotal, 0);
  if (absoluteTotal !== 0) {
    console.log(absoluteTotal);
  }
  return absoluteTotal.toFixed(2);
};
console.log(calculateTotal(totalAmount, calculateInputsTotal));

// ---||---    ---||---    ---||---


