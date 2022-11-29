document.addEventListener('DOMContentLoaded', () => {
   const pow = (num, degree) => {
      if (degree === 0) {
         return 1;
      }

      if (degree < 0) {
         return 1 / (num * pow(num, -degree - 1));
      }

      return num * pow(num, degree - 1);
   }

   console.log("2^3 craft:", pow(2, 3), "built-in:", Math.pow(2, 3))
   console.log("3^0 craft:", pow(3, 0), "built-in:", Math.pow(3, 0))
   console.log("4^(-3) craft:", pow(4, -3), "built-in:", Math.pow(4, -3))
   console.log("-5^(-3) craft:", pow(-5, -3), "built-in:", Math.pow(-5, -3))
   console.log("6^(-3) craft:", pow(6, -3), "built-in:", Math.pow(6, -3))
})
