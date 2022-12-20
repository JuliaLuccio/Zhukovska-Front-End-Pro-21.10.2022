document.addEventListener('DOMContentLoaded', () => {
   const arrayOfNumbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

   // 1. Find the sum and count of positive elements.
   // var1

   // const positiveNumber = arrayOfNumbers.reduce( (acc, num) => {
   //    if (num > 0) {
   //       acc.sum += num;
   //       acc.count++;
   //       return acc;
   //    }
   //    return acc;
   // }, {count:0, sum:0} );

   // console.log(`Sum of positive elements ${positiveNumber.sum} and count ${positiveNumber.count}`);

   // var2
   const positiveNumber = arrayOfNumbers.filter( num => num > 0 );
   const posNumCount = positiveNumber.length;
   const posNumSum = positiveNumber.reduce( (acc, num) => acc + num, 0);
   
   console.log(`1. Sum of positive elements ${posNumSum} and count ${posNumCount}`)

   // 2. Find the minimum array element and its sequence number.

   const minValue = Math.min(...arrayOfNumbers);
   const seqMinNumber = arrayOfNumbers.indexOf(minValue) + 1;

   console.log(`2. Minimal element is ${minValue} and its sequence number ${seqMinNumber}`);

   // 3. Find the maximum array element and its sequence number.

   const maxValue = Math.max(...arrayOfNumbers);
   const seqMaxNumber = arrayOfNumbers.indexOf(maxValue) + 1;

   console.log(`3. Maximum element is ${maxValue} and its sequence number ${seqMaxNumber}`);

   // 4. Determine the count of negative elements.

   const negativeNumberCount = arrayOfNumbers.filter( num => num < 0 ).length;

   console.log(`4. Count of negative elements ${negativeNumberCount}`);

   // 5. Find the count of odd positive elements.

   const positiveOddNum = positiveNumber.filter( num => num % 2 !== 0);
   const posOddNumCount = positiveOddNum.length;

   console.log(`5. Count of odd positive elements ${posOddNumCount}`);

   // 6. Find the count of even positive elements.

   const positiveEvenNum = positiveNumber.filter( num => num % 2 === 0);
   const posEvenNumCount = positiveEvenNum.length;

   console.log(`6. Count of even positive elements ${posEvenNumCount}`);

   // 7. Find the sum of even positive elements.

   const sumOfPositiveEvenNum = positiveEvenNum.reduce( (acc, num) => acc + num, 0 );

   console.log(`7. Sum of even positive elements ${sumOfPositiveEvenNum}`);

   // 8. Find the sum of odd positive elements.

   const sumOfPositiveOddNum = positiveOddNum.reduce( (acc, num) => acc + num, 0 );

   console.log(`8. Sum of odd positive elements ${sumOfPositiveOddNum}`);

   // 9. Find the product of positive elements.

   const multyOfPositiveNum = positiveNumber.reduce( (acc, num) => acc * num, 1);

   console.log(`9. Product of positive elements ${multyOfPositiveNum}`);

   // 10. Find the largest among the elements of the array, reset the rest to zero.

   const resetExceptMaxNum = arrayOfNumbers.map( current => (current !== maxValue) ? 0 : current );

   console.log('10. Original array\n', arrayOfNumbers);
   console.log('10. The largest element stay and the rest are reset\n', resetExceptMaxNum);
})
