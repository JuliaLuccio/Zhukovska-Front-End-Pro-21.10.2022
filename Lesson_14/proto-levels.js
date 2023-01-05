document.addEventListener('DOMContentLoaded', () => {
   /**
    * @param {object} object
    * 
    * @return {number} count layers of prototypes
    */

   const layersOfInheritance = (object) => {
      if (Object.getPrototypeOf(object) === Object.prototype) {
         return 0;
      }
   
      let i = layersOfInheritance(Object.getPrototypeOf(object));
      return ++i;
   }

   const obj = { a: 1 };
   const obj2 = Object.create(obj);
   const obj3 = Object.create(obj2);

   console.log(layersOfInheritance({})); // 0
   console.log(layersOfInheritance(new Date())); // 1
   console.log(layersOfInheritance(obj3)); // 2
   console.log(layersOfInheritance(obj2)); // 1
   console.log(layersOfInheritance(obj)); // 0
})
