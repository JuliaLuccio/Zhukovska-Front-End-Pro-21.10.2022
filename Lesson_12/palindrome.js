document.addEventListener('DOMContentLoaded', () => {
   const methods = {
      reverse(str) {return str.split("").reverse().join("")},
      removeOneChar(str) {
         for (let i = 0; i < str.length; i++) {
            const removeOne = str.slice(i === 0 ? 1 : 0, i) + str.slice(i + 1);
            if (removeOne === this.reverse(removeOne)) {
               return true;
            }
         }
         return false
      },
   }
   
   const SingleCharacterPalindrome = (str) => {
   
      if (str === methods.reverse(str)) {
         return 'OK'
      }
   
      if (methods.removeOneChar(str)) {
         return 'Remove One';
      }
   
      return 'Not Possible';
   }
   
      console.log(SingleCharacterPalindrome("abba")); // "OK"
      console.log(SingleCharacterPalindrome("abbaa")); // "Remove One"
      console.log(SingleCharacterPalindrome("abbaab")); // "Not Possible"
      console.log(SingleCharacterPalindrome("madmam")); // "Remove One"
      console.log(SingleCharacterPalindrome("raydarm")); // "Not Possible"
      console.log(SingleCharacterPalindrome("hannah")); // "OK"
})
