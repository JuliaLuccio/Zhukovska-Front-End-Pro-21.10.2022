document.addEventListener('DOMContentLoaded', () => {
   const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
   const charLen = characters.length;

   const generateKey = (length, characters) => {
      let result = '';
      for (let i = 0; i < length; i++) {
         const randomNum = Math.floor(Math.random() * charLen);
         result += characters.charAt(randomNum);
      }
      return result;
   }

   const key = generateKey(16, characters);
   console.log(key);
})
