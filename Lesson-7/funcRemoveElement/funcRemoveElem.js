document.addEventListener('DOMContentLoaded', () => {
   const array = [1, 2, 3, 4, 5, 6, 7];
   console.log(array);

   const removeElement = (array, item) => {
      while (array.includes(item)) {
         const position = array.indexOf(item);
         array.splice(position, 1);
      }
      
      return array;
   }
   
   removeElement(array, 5);
   console.log(array);
})
