document.addEventListener('DOMContentLoaded', () =>{
   const sumOfNumbers = () => {
      let counter = 0;

      const add = (val) => {
         counter += val;
      };

      const minus = (val) => {
         counter -= val;
      };

      const value = () => {
         return counter;
      };

      return {
         value,
         add,
         minus
      };
   }

   const sum = sumOfNumbers();
   sum.add(3);
   console.log(sum.value());
   sum.add(5);
   console.log(sum.value());
   sum.add(20);
   console.log(sum.value());
   sum.minus(8);
   console.log(sum.value());

   const otherSum = sumOfNumbers();
   otherSum.add(10);
   console.log(otherSum.value());
})
