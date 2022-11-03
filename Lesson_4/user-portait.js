document.addEventListener('DOMContentLoaded', () => {
   const userYearOfBirth = Number(prompt('Введіть Ваш рік народження'));
   const userCity = prompt('В якому місті Ви живете?').toLowerCase();
   const userFavoriteSport = prompt('Ваш улюблений вид спорту?').toLowerCase();

   const userAge = 2022 - userYearOfBirth;

   const capitalOfCountry = {
      київ: 'України',
      вашингтон: 'США',
      лондон: 'Великобританії',
   };

   const userCountry = capitalOfCountry[userCity];
   let userPlaceOfLive = userCountry
      ? `столиці ${userCountry}`
      : `місті ${userCity.replace(userCity[0], userCity[0].toUpperCase())}`;

   const sportAndSportsChampions = {
      теніс: 'Сестри Серена та Вінус Вільямс',
      бокс: 'Олександр Усик',
      футбол: 'Андрій Шевченко',
   };

   const sportsChampions = sportAndSportsChampions[userFavoriteSport];
   let userSportChampions = sportsChampions
      ? `Круто! Мрієте стати як ${sportsChampions}?`
      : `Ваш улюблений вид спорту ${userFavoriteSport}`;

   let messageUserAge = userYearOfBirth > 1900 && userYearOfBirth < 2022
      ? `Схоже Вам у цьому році виповнилось ${userAge} 🎉`
      : 'Шкода, що Ви не захотіли ввести свій рік народження';

   let messageUserPlaceOfLive = userCity
      ? `Ви живете у ${userPlaceOfLive}`
      : 'Шкода, що Ви не захотіли ввести своє місто';

   let messageUserChampion = userFavoriteSport
      ? userSportChampions
      : 'Шкода, що Ви не захотіли вказати улюблений спорт';

   !(userYearOfBirth > 1900 && userYearOfBirth < 2022) && !userCity && !userFavoriteSport
      ? alert('Шкода, що Ви нічого не вказали!')
      : alert(`${messageUserAge} \n${messageUserPlaceOfLive}. \n${messageUserChampion}`);
});
