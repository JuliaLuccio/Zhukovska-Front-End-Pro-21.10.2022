document.addEventListener('DOMContentLoaded', () => {
   const hoursAmount = (prompt('Введіть кількість годин для конвертації в секунди'));
   const hoursAmountCommaToPoint = hoursAmount.replace(',', '.');
   const hoursAmountNumber = Number(hoursAmountCommaToPoint);
   if (isNaN(hoursAmountNumber)){
      return alert(`${hoursAmount} це не число! Спробуйте ще раз!`);
   }
   
   const secondsInHour = 3600;
   const secondsInUserHour = hoursAmountNumber * secondsInHour;

   alert(`${hoursAmountNumber} годин(и) = ${secondsInUserHour} секунд`);
})