document.addEventListener('DOMContentLoaded', () => {
   const firstNumber = Number(prompt('Введіть перше число для розрахунку'));
   const secondNumber = Number(prompt('Введіть друге число для розрахунку'));

   const resultAddTwoNum = firstNumber + secondNumber;
   const resultSubTwoNum = firstNumber - secondNumber;
   const resultMultTwoNum = firstNumber * secondNumber;
   const resultDivTwoNum = firstNumber / secondNumber;

   if (firstNumber !== firstNumber || secondNumber !== secondNumber) {
      alert('Ви ввели не число! Спробуйте ще раз.');
   } else {
      alert(`Користувач ввів ${firstNumber} і ${secondNumber}:
      ${firstNumber} + ${secondNumber} = ${resultAddTwoNum}
      ${firstNumber} - ${secondNumber} = ${resultSubTwoNum}
      ${firstNumber} * ${secondNumber} = ${resultMultTwoNum}
      ${firstNumber} / ${secondNumber} = ${resultDivTwoNum}`);
   };
})
