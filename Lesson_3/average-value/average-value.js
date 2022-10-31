document.addEventListener('DOMContentLoaded', () => {
   const firstNum = prompt('Введіть перше число для розрахунку середнього значення');
   const firstNumCommaToPoint = firstNum.replace(',', '.');
   const firstNumToTypeNum = Number(firstNumCommaToPoint);
   if (isNaN(firstNumToTypeNum)) {
      return alert(`${firstNum} це не число! Спробуйте ще раз!`);
   }

   const secondNum = prompt('Введіть друге число для розрахунку середнього значення');
   const secondNumCommaToPoint = secondNum.replace(',', '.');
   const secondNumToTypeNum = Number(secondNumCommaToPoint);
   if (isNaN(secondNumToTypeNum)) {
      return alert(`${secondNum} це не число! Спробуйте ще раз!`);
   }

   const thirdNum = prompt('Введіть третє число для розрахунку середнього значення');
   const thirdNumCommaToPoint = thirdNum.replace(',', '.');
   const thirdNumToTypeNum = Number(thirdNumCommaToPoint);
   if (isNaN(thirdNumToTypeNum)) {
      return alert(`${thirdNum} це не число! Спробуйте ще раз!`);
   }

   const averageOfThreeNum = (firstNumToTypeNum + secondNumToTypeNum + thirdNumToTypeNum) / 3;

   alert(`Середнє значення чисел ${firstNumToTypeNum}, ${secondNumToTypeNum} та ${thirdNumToTypeNum}:
   ${averageOfThreeNum}`);
})
