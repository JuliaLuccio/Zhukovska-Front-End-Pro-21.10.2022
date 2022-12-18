document.addEventListener('DOMContentLoaded', () => {
   console.log('1. Output the numbers from 20 to 30 through the gap using a step of 0.5 (20 20.5 21 21.5….)');

   let resultStrWithSpace = '';
   for (let i = 20; i <= 30; i+=.5) {
      resultStrWithSpace += `${i} `;
   }
   resultStrWithSpace = resultStrWithSpace.slice(0,-1);
   console.log(resultStrWithSpace);
   // ----
   console.log('2. One dollar is worth 27 hryvnias. Print data with the calculation of the cost of 10, 20, 30... 100 dollars.)');

   const dollarsPerHryvnia = 27;
   for (let i = 10; i <= 100; i+=10) {
      let hryvniaCount = i * dollarsPerHryvnia;
      console.log(`${i} \$ = ${hryvniaCount} ₴`);
   }
   // ----
   console.log('3. There is an integer. Output all integers from 1 to 100 whose square does not exceed N numbers.)');

   const integerNumber = Number(prompt('Enter some integer number'));
   for (let i = 1; i <= 100; i++) {
      let sqOfI = Math.pow(i,2);
      if (sqOfI < integerNumber) {
         console.log(i);
      }
   }
   // ----
   console.log('4. There is an integer. Find out whether it is simple number (simple is a number greater than 1 that has no divisors other than 1 and itself).)');

   let index = integerNumber;
   let divCount = 0;
   for (; index >= 1; index--) {
      if (integerNumber % index === 0) {
         console.log(index);
         divCount++;
      }
   }

   if (divCount === 2) {
      console.log('this is simple number')
   } else {
      console.log('this is not simple number')
   }
   // ----
   console.log('5. There is an integer. Determine whether it is possible to obtain this number by reducing the number 3 to a certain power. (For example, the numbers 9, 81 can be obtained, and 13 cannot be).)');

   let i = 1;
   let expNum3 = 1;
   let isNumFound = false;
   while (expNum3 <= integerNumber) {
      expNum3 = Math.pow(3,i);
      if (expNum3 === integerNumber) {
         console.log(`this number can be obtained by raising 3 to the power ${i}`);
         isNumFound = true;
      }
      i++;
   }
   if (!isNumFound) {
      console.log(`this number can't be obtained by raising 3 to the power`);
   }
})
