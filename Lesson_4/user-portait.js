document.addEventListener('DOMContentLoaded', () => {
   const userYearOfBirth = Number(prompt('Введіть Ваш рік народження'));
   let userCity = prompt('В якому місті Ви живете?');
   let userFavoriteSport = prompt('Ваш улюблений вид спорту?');

   const currentYear = new Date().getFullYear();
   const maxAgeOfLife = 122;
   const minValidYear = currentYear - maxAgeOfLife;
   const userAge = currentYear - userYearOfBirth;

   if (userCity && userCity[0] === userCity[0].toLowerCase()) {
      userCity = userCity.replace(userCity[0], userCity[0].toUpperCase());
   }

   const kyiv = 'Київ';
   const washington = 'Вашингтон';
   const london = 'Лондон';

   const capitalOfCountry = {
      [kyiv]: 'України',
      [washington]: 'США',
      [london]: 'Великобританії'
   };

   const userCountry = capitalOfCountry[userCity];
   let userPlaceOfLive = userCountry
      ? `столиці ${userCountry}`
      : `місті ${userCity}`;

   if (userFavoriteSport && userFavoriteSport[0] === userFavoriteSport[0].toUpperCase()) {
      userFavoriteSport = userFavoriteSport.replace(userFavoriteSport[0], userFavoriteSport[0].toLowerCase());
   }

   const tennis = 'теніс';
   const boxing = 'бокс';
   const football = 'футбол';

   const sportAndSportsChampions = {
      [tennis]: 'Сестри Серена та Вінус Вільямс',
      [boxing]: 'Олександр Усик',
      [football]: 'Андрій Шевченко'
   };

   const sportsChampions = sportAndSportsChampions[userFavoriteSport];
   let userSportChampions = sportsChampions
      ? `Круто! Мрієте стати як ${sportsChampions}?`
      : `Ваш улюблений вид спорту ${userFavoriteSport}`;

   let messageUserAge = userYearOfBirth > minValidYear && userYearOfBirth < currentYear
      ? `Схоже Вам у цьому році виповнилось ${userAge} 🎉`
      : 'Шкода, що Ви не захотіли ввести свій рік народження';

   let messageUserPlaceOfLive = userCity
      ? `Ви живете у ${userPlaceOfLive}`
      : 'Шкода, що Ви не захотіли ввести своє місто';

   let messageUserChampion = userFavoriteSport
      ? userSportChampions
      : 'Шкода, що Ви не захотіли вказати улюблений спорт';

   !(userYearOfBirth > minValidYear && userYearOfBirth < currentYear) && !userCity && !userFavoriteSport
      ? alert('Шкода, що Ви нічого не вказали!')
      : alert(`${messageUserAge} \n${messageUserPlaceOfLive}. \n${messageUserChampion}`);
});
