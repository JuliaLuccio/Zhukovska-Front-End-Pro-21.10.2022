document.addEventListener('DOMContentLoaded', () => {
   // TASK #1 average value
   const array = [10, 20, 'str', 30];

   const averageValOfNumFromArray = (arr) => {
      const onlyNum = arr.filter((value) => typeof value === 'number');
      const len = onlyNum.length;
      return onlyNum.reduce((acc, value) => (acc + value)) / len;
   }
   console.log(averageValOfNumFromArray(array));

   // TASK #2 func calculate
   // var#1

   // const firstNum = Number(prompt('Enter first number'));
   // const actionSign = prompt('Enter your action +  -  *  /  %  ^');
   // const secondNum = Number(prompt('Enter second number'));

   // const doMath = (x, sign, y) => {
   //    switch (sign) {
   //       case '+': return x + y;
   //       case '-': return x - y;
   //       case '*': return x * y;
   //       case '/': return x / y;
   //       case '%': return x % y;
   //       case '^': return x ** y;
   //       default: throw Error('Something went wrong. Try again!')
   //    }
   // }

   // var#2

   const operation = {
      plus: '+',
      minus: '-',
      multy: '*',
      div: '/',
      remainder: '%',
      pow: '^'
   }

   const operationCheck = (operation, operationForCheck) => {
      return operation === operationForCheck;
   }

   const firstNum = Number(prompt('Enter first number'));
   const actionSign = prompt(`Enter your action ${Object.values(operation).join('  ')}`);
   const secondNum = Number(prompt('Enter second number'));

   const doMath = (x, sign, y) => {
      if (operationCheck(operation.plus, sign)) {
         return x + y;
      } else if (operationCheck(operation.minus, sign)) {
         return x - y;
      } else if (operationCheck(operation.multy, sign)) {
         return x * y;
      } else if (operationCheck(operation.div, sign)) {
         return x / y;
      } else if (operationCheck(operation.remainder, sign)) {
         return x % y;
      } else if (operationCheck(operation.pow, sign)) {
         return x ** y;
      } else {
         return 'Something went wrong. Try again!'
      }
   }

   console.log(doMath(firstNum, actionSign, secondNum))

   // TASK #3 two dimensional array
   // var#1

   // const fillItems = (arrayLen) => {
   //    if (arrayLen <= 0) {
   //       return [];
   //    } else {
   //       const arr = fillItems(arrayLen - 1);
   //       const value = prompt('Enter item value');
   //       arr.push(value);
   //       return arr;
   //    }
   // }
   
   // const lengthMainArr = Number(prompt('Enter a length of array'));
   // const userArr = new Array(lengthMainArr);
   
   // for (let i = 0; i < userArr.length; i++) {
   //    const itemLen = Number(prompt(`Enter length of subarray #${i + 1}`));
   //    userArr[i] = fillItems(itemLen);
   // }
   
   // var#2
   const fillArray = (arrayLen) => {
      if (arrayLen <= 0) {
         return [];
      } else {
         const mainArr = fillArray(arrayLen - 1);
         const itemLen = Number(prompt(`Enter length of subarray ${arrayLen}`));
         mainArr.push(fillItems(itemLen));
         return mainArr;
      }
   }
   
   const fillItems = (subArrayLen) => {
      if (subArrayLen <= 0) {
         return [];
      } else {
         const subArr = fillItems(subArrayLen - 1);
         const value = prompt('Enter item value');
         subArr.push(value);
         return subArr;
      }
   }

   const lengthMainArr = Number(prompt('Enter a length of array'));
   const userArr = fillArray(lengthMainArr);

   console.log(userArr);
   
   // TASK #4 remove symbols
   // var#1
   // const removeSymb = (str, symbArr) => {
   //    for (let i = 0; i < symbArr.length; i++) {
   //       str = str.replace(RegExp(symbArr[i], 'g'), '');
   //    }
   //    return str;
   // }

   // var#2
   const removeSymb = ([...str], symbArr) => {
      const filterSymb = str.filter(char => {
         return symbArr.indexOf(char) === -1;
      });
      return filterSymb.join('');
   };

   console.log(removeSymb("hello world", ['l', 'd']))

})
