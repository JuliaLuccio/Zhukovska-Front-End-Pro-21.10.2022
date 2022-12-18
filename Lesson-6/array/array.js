document.addEventListener('DOMContentLoaded', () => {
   const userArray = [];
   userArray.length = Number(prompt('Enter the amount of elements'));
   
   for (let i = 0; i < userArray.length; i++) {
      userArray[i] = prompt(`Enter element ${i+1}`);
   }

   const userArrayTrueCheck = userArray.filter(Boolean);

   const userArrayEditType = userArrayTrueCheck.map(elem =>
      !isNaN(elem) ? Number(elem) : elem
   );

   // sorting alphabetically and then numerically
   userArrayEditType.sort().sort((a,b) => a - b);
   // delete array elements from 2 to 4 inclusive
   userArrayEditType.splice(1, 3);

   if (userArrayEditType.length === 0) {
      alert('Unfortunately, there is nothing to display');
   } else {
      alert(userArrayEditType.join(', '));
   }
})

