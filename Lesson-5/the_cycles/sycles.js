document.addEventListener('DOMContentLoaded', () => {
   console.log('1. Display the numbers from 10 to 20 on the page in one line separated by commas');

   let start = 10;
   let finish = 20;
   let result = '';
   while (start <= finish) {
      result += `${start},`;
      start++;
      // remove the last comma using a check instead of the `slice` method
      // if (start === 20) {
      //   result += `${start}`;
      // }
   }
   result = result.slice(0, -1);
   console.log(result);
// -----
   console.log('2. Print the squares of numbers from 10 to 20');

   for (let num = 10; num <= 20; num++) {
      let sqOfNum = Math.pow(num,2);
      console.log(`Квадрат числа ${num}: ${sqOfNum}`);
   }
// -----
   console.log('3. Display the multiplication table by 7');

   for (let i = 1; i <= 10; i++) {
      let multBy7 = i * 7;
      console.log(`${i} * 7 = ${multBy7}`);
   }
// -----
   console.log('4. Find the sum of all integers from 1 to 15');

   let sum = 0;
   for (let i = 1; i <=15; i++) {
      sum += i;
   }
   console.log(sum);
// -----
   console.log('5. Find the result of multiplying all integers from 15 to 35');

   let resultMult = 1;
   for (let i = 15; i <=35; i++) {
      resultMult *= i;
   }
   console.log(resultMult);
// -----
   console.log('6. Find the arithmetic mean of all integers from 1 to 500');
// 
// just practiced creating an array
   const arrayOfNum = [];
   for (let i = 1; i <= 500; i++) {
      arrayOfNum.push(i);
   }

   let sumArray = 0;
   for (let i = 0; i < arrayOfNum.length; i++) {
      sumArray += arrayOfNum[i];
   }

   const averageValue = sumArray / arrayOfNum.length;
   console.log(averageValue);
// -----
   console.log('7. Output the sum of only even numbers in the range from 30 to 80');

   let sumEvenNum = 0;
   for (let i = 30; i <= 80; i++) {
      if (i % 2 !== 0) {
         continue;
      }
      sumEvenNum += i;
   }
   console.log(sumEvenNum);
// -----
   console.log('8. Output all numbers between 100 and 200 that are divisible by 3');

   for (let i = 100; i <= 200; i++) {
      if (i % 3 !== 0) {
         continue;
      }
      console.log(i);
   }
// -----
   console.log('9. There is a natural number. Find and display all its divisors on the page.');

   const someNaturalNumber = prompt('Enter some natural number');
   const divisorsArr = [];
   console.log(`All divisors number ${someNaturalNumber}:`)
   let i = +someNaturalNumber;
   for (; i >= 1; i--) {
      if (someNaturalNumber % i ===0) {
         console.log(i);
         divisorsArr.push(i);
      }
   }
// -----
   console.log('10. Determine the number of its even divisors.');

   const evenDivArr = [];
   for (let i = 0; i < divisorsArr.length; i++) {
      if (divisorsArr[i] % 2 === 0) {
         console.log(divisorsArr[i]);
         evenDivArr.push(divisorsArr[i]);
      }
   }
// -----
   console.log('11. Find the sum of its even divisors.');

   let sumEvenDiv = 0;
   for (i = 0; i < evenDivArr.length; i++) {
      sumEvenDiv += evenDivArr[i];
   }
   console.log(sumEvenDiv);
// -----
   console.log('12. Print the complete multiplication table from 1 to 10.');

   let resultTableMult = 0;
   for (i = 1; i <= 10; i++) {
      console.log('');
      for (j = 1; j <=10; j++) {
         resultTableMult = i * j;
         console.log(`${i} * ${j} = ${resultTableMult}`);
      }
   }
})
