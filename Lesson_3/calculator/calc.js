document.addEventListener('DOMContentLoaded', () => {
   const whatMathOperation = prompt('Яку з доступних дій (add +, sub -, mult *, div /) бажаєте виконати?');

   if (whatMathOperation !== '+' && whatMathOperation !== 'add'
   && whatMathOperation !== '-' && whatMathOperation !== 'sub'
   && whatMathOperation !== '*' && whatMathOperation !== 'mult'
   && whatMathOperation !== '/' && whatMathOperation !== 'div') {
      return alert('Спробуйте вибрати одну з запропонованих дій:\n add\n +\n sub\n -\n mult\n *\n div\n /');
   }

   const number1 = Number(prompt('Введіть перше число для дії'));

   if (isNaN(number1)) {
      return alert('Ви ввели не число! Спробуйте ще раз!');
   }

   const number2 = Number(prompt('Введіть друге число для дії'));

   if (isNaN(number2)) {
      return alert('Ви ввели не число! Спробуйте ще раз!');
   }
   
   if (whatMathOperation === '+' || whatMathOperation === 'add') {
      const resultAddTwoNum = number1 + number2;
      alert(`${number1} + ${number2} = ${resultAddTwoNum}`);
   } else if (whatMathOperation === '-' || whatMathOperation === 'sub') {
      const resultSubTwoNum = number1 - number2;
      alert(`${number1} - ${number2} = ${resultSubTwoNum}`);
   } else if (whatMathOperation === '*' || whatMathOperation === 'mult') {
      const resultMultTwoNum = number1 * number2;
      alert(`${number1} * ${number2} = ${resultMultTwoNum}`);
   } else if (whatMathOperation === '/' || whatMathOperation === 'div') {
      const resultDivTwoNum = number1 / number2;
      alert(`${number1} / ${number2} = ${resultDivTwoNum}`);
   }
   })
