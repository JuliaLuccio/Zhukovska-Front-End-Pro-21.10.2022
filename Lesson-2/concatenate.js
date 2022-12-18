document.addEventListener('DOMContentLoaded', () => {
   let userName = prompt("Будь ласка, вкажіть Ваше ім'я", "Мандрівник");
   let numPostOffice = prompt("№ відділення", "1");
   let userCity = prompt("Ваше місто", "Kyiv");
   alert('Вітаємо, ' + userName + '! Ми отримали Ваше замовлення. Очікуйте доставку у місто ' + userCity + ' у відділення №' + numPostOffice + '.');
})
