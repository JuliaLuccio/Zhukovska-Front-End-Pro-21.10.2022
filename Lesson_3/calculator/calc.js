document.addEventListener('DOMContentLoaded', () => {
   const whatMathOperation = prompt('Яку з доступних дій (add +, sub -, mult *, div /) бажаєте виконати?');

   if (whatMathOperation !== '+' && whatMathOperation !== 'add'
   && whatMathOperation !== '-' && whatMathOperation !== 'sub'
   && whatMathOperation !== '*' && whatMathOperation !== 'mult'
   && whatMathOperation !== '/' && whatMathOperation !== 'div') {
      return alert('Спробуйте вибрати одну з запропонованих дій:\n add\n +\n sub\n -\n mult\n *\n div\n /');
   }

   const number1 = Number(prompt('Введіть перше число для дії'));

   if (number1 !== number1) {
      return alert('Ви ввели не число! Спробуйте ще раз!');
   }

   const number2 = Number(prompt('Введіть друге число для дії'));

   if (number2 !== number2) {
      return alert('Ви ввели не число! Спробуйте ще раз!');
   }

   const resultAddTwoNum = number1 + number2;
   const resultSubTwoNum = number1 - number2;
   const resultMultTwoNum = number1 * number2;
   const resultDivTwoNum = number1 / number2;

   if (whatMathOperation === '+' || whatMathOperation === 'add') {
      alert(`${number1} + ${number2} = ${resultAddTwoNum}`);
   } else if (whatMathOperation === '-' || whatMathOperation === 'sub') {
      alert(`${number1} - ${number2} = ${resultSubTwoNum}`);
   } else if (whatMathOperation === '*' || whatMathOperation === 'mult') {
      alert(`${number1} * ${number2} = ${resultMultTwoNum}`);
   } else if (whatMathOperation === '/' || whatMathOperation === 'div') {
      alert(`${number1} / ${number2} = ${resultDivTwoNum}`);
   } else {
      alert('Щось пішло не так, спробуйте ще раз!');
   }
   })

// ------- VARIANT#2 через вкладені if -------
// document.addEventListener('DOMContentLoaded', () => {
//    const whatMathOperation = prompt('Яку з доступних дій (add +, sub -, mult *, div /) бажаєте виконати?');

//    if (whatMathOperation == '+' || whatMathOperation == 'add'
//       || whatMathOperation == '-' || whatMathOperation == 'sub'
//       || whatMathOperation == '*' || whatMathOperation == 'mult'
//       || whatMathOperation == '/' || whatMathOperation == 'div') {

//       const number1 = Number(prompt('Введіть перше число для дії'));

//       if (number1 === number1) {

//          const number2 = Number(prompt('Введіть друге число для дії'));

//          if (number2 === number2) {

//             const resultAddTwoNum = number1 + number2;
//             const resultSubTwoNum = number1 - number2;
//             const resultMultTwoNum = number1 * number2;
//             const resultDivTwoNum = number1 / number2;

//             if (whatMathOperation === '+' || whatMathOperation === 'add') {
//                alert(`${number1} + ${number2} = ${resultAddTwoNum}`);
//             } else if (whatMathOperation === '-' || whatMathOperation === 'sub') {
//                alert(`${number1} - ${number2} = ${resultSubTwoNum}`);
//             } else if (whatMathOperation === '*' || whatMathOperation === 'mult') {
//                alert(`${number1} * ${number2} = ${resultMultTwoNum}`);
//             } else if (whatMathOperation === '/' || whatMathOperation === 'div') {
//                alert(`${number1} / ${number2} = ${resultDivTwoNum}`);
//             } else {
//                alert('Щось пішло не так, спробуй ще раз!');
//             };
//          } else {
//             alert('Ви ввели не число! Спробуйте ще раз!');
//          };
//       } else {
//          alert('Ви ввели не число! Спробуйте ще раз!');
//       };
//    } else {
//       alert('Спробуйте вибрати одну з запропонованих дій:\n add\n +\n sub\n -\n mult\n *\n div\n /');
//    };
// })