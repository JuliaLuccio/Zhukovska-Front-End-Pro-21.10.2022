document.addEventListener('DOMContentLoaded', () => {
   let numOrStr = prompt('input number or string');
   console.log(numOrStr);

   // --- Variant 1 ---
   // const isNan = isNaN(+numOrStr);
   // const isNull = numOrStr === null ? numOrStr : numOrStr.trim();

   // switch (isNan || isNull) {
   //    case null:
   //       console.log('ви скасували');
   //       break;
   //    case true:
   //       console.log('number is Ba_NaN');
   //       break;
   //    case '':
   //       console.log('Empty String');
   //       break;
   //    default: 
   //       console.log('OK!');

   // --- Variant 2 ---
   switch (typeof numOrStr) {
      case 'object':
         switch (numOrStr) {
            case null:
               console.log('ви скасували');
               break;
         }
         break;
      case 'string':
         const isNan = isNaN(+numOrStr);
         const strTrim = numOrStr.trim();
         switch (isNan || strTrim) {
            case true:
               console.log('number is Ba_NaN');
               break;
            case '':
               console.log('Empty String');
               break;
            default:
               console.log('OK!');
               break;
         }
         break;
   }
})
