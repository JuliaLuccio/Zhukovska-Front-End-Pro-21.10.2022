# Front End Pro 21.10.2022

## Lesson 9

<details open>
<summary>

#### [The Recursive](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_9/). Деталі завдання

</summary>

Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке треба піднести до ступеню, передається як перший аргумент у функцію.

Ступінь передається, як другий аргумент у функцію pow (num, degree).

</details>

## Lesson 8

<details>
<summary>

#### [Few Functions](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_8/). Деталі завдання

</summary>

* Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
* Написати функцію `doMath`(x, sign, y), яка отримує 3 аргументи: числа `x` і `y`, рядок `sign`.  
У змінній `sign` може бути: `+, -, *, /, %, ^ (ступінь)`. Вивести результат математичної дії, вказаної в змінній sign. Обидва числа і знак приходять від користувача.
* Написати функцію заповнення даними користувача двовимірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
* Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.  
`'func(" hello world", ['l', 'd'])'` поверне нам `"heo wor"`. Вихідний рядок та символи для видалення задає користувач.

</details>

## Lesson 7
<details>
<summary>

#### [Function generateKey](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_7/func-generateKey/). Деталі завдання

</summary>

* Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

Наприклад:

```
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';  
const key = generateKey(16, characters);  
console.log(key); // eg599gb60q926j8i 
```

#### [Function removeElement](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_7/funcRemoveElement/). Деталі завдання

</summary>

* Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

> const array = [1, 2, 3, 4, 5, 6, 7];  
removeElement(array, 5);  
console.log(array); // Результат: [1, 2, 3, 4, 6, 7]  

</details>

## Lesson 6
<details>
<summary>

#### [User bills](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_6/array/). Деталі завдання

</summary>

* Створити масив, довжину та елементи якого задає користувач.
* Відсортувати масив за зростанням.
* Видалити елементи з масиву з 2 по 4 (включно).
* У міру змін виводити вміст масиву на сторінку.

</details>

<details>
<summary>

#### [The array](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_6/user-bills/). Деталі завдання

</summary>

<details>
<summary>Дано масив об'єктів.</summary>

```
let users = [
{  
"index": 0,  
"isActive": true,
"balance": "$2,226.60",
"name": "Eugenia Sawyer",
"gender": "female",
"phone": "+1 (840) 583-3207",
"address": "949 John Street, Rose, Puerto Rico, 1857"
},
{
"index": 1,
"isActive": true,
"balance": "$2,613.77",
"name": "Pauline Gallegos",
"gender": "female",
"phone": "+1 (985) 593-3328",
"address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
},
{
"index": 2,
"isActive": false,
"balance": "$3,976.41",
"name": "Middleton Chaney",
"gender": "male",
"phone": "+1 (995) 591-2478",
"address": "807 Fleet Walk, Brutus, Arkansas, 9783"
},
{
"index": 3,
"isActive": true,
"balance": "$1,934.58",
"name": "Burns Poole",
"gender": "male",
"phone": "+1 (885) 559-3422",
"address": "730 Seba Avenue, Osage, Alabama, 6290"
},
{
"index": 4,
"isActive": true,
"balance": "$3,261.65",
"name": "Mcfadden Horne",
"gender": "male",
"phone": "+1 (942) 565-3988",
"address": "120 Scholes Street, Kirk, Michigan, 1018"
},
{
"index": 5,
"isActive": false,
"balance": "$1,790.56",
"name": "Suzette Lewis",
"gender": "female",
"phone": "+1 (837) 586-3283",
"address": "314 Dunne Place, Bawcomville, Guam, 9053"
}
]
```

</details>

* Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.  
* І знайти суму всіх балансів користувачів

</details>

## Lesson 5

<details>
<summary>

#### [More complex cycles](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_5/more-complex-cycles/). Деталі завдання

</summary>

Написати цикли, які роблять наступне:  

1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
4. Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

</details>

<details>
<summary>

#### [Writing the cycles](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_5/the_cycles/). Деталі завдання

</summary>

Написати цикли, які зможуть:

1. Вивести на сторінку в один рядок через кому числа від 10 до 20.
2. Вивести квадрати чисел від 10 до 20.
3. Вивести таблицю множення на 7.
4. Знайти суму всіх цілих чисел від 1 до 15.
5. Знайти добуток усіх цілих чисел від 15 до 35.
6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
10. Визначити кількість його парних дільників.
11. Знайти суму його парних дільників.
12. Надрукувати повну таблицю множення від 1 до 10.

</details>

<details>
<summary>

#### [Rewrite switch case](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_5/rewrite-switch-case/). Деталі завдання

</summary>

Переписати конструкцію `if`...`else` з використанням конструкції `switch`…`case`  

> let numOrStr = prompt('input number or string');  
console.log(numOrStr);  
if (numOrStr === null) {  
console.log('ви скасували');  
} else if( numOrStr.trim() === '' ) {  
console.log('Empty String');  
} else if ( isNaN( +numOrStr ) ) {  
console.log(' number is Ba_NaN');  
} else {  
console.log('OK!');  
}  

</details>

## Lesson 4

<details>
<summary>

#### [User portrait](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_4/). Деталі завдання

</summary>

*Частина №1*

Створити скрипт яки повинен виконувати наступне:

* запитати у користувача рік народження;
* запитати в нього, в якому місті він живе;
* запитати його улюблений вид спорту.

При натисканні на `ОК` показуємо `alert`, де має бути відображена наступна інформація:  

* його вік;
* якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто.
* Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

*Частина №2*

* Вибираємо самі 3 види спорту та 3 чемпіони у цих видах.
* Відповідно, якщо користувач вкаже один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати як …? і підставляємо на місце точок ім'я та прізвище чемпіона.

Все це має бути відображено в одному вікні (алерті).  

Якщо в якомусь випадку він не захоче вводити інформацію і натисне `Скасувати`, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

</details>

## Lesson 3

<details>
<summary>

#### [Average value](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_3/average-value/). Деталі завдання

</summary>

Створити скрипт, який має визначити середнє арифметичне трьох чисел з наступними умовами:  

* отримати від користувача через три `prompt` три числа;
* показати через `alert` середнє арифметичне цих чисел.

</details>

<details>
<summary>

#### [Hours to seconds](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_3/hours-to-seconds/). Деталі завдання

</summary>

Напиcати скрипт, який переводить години в секунди і має робити наступне:  

* запитати у користувача кількість годин;
* порахувати, скільки секунд у цій кількості годин;
* записати обчислене значення у змінну;
* вивести цю змінну користувачеві через `alert`.

</details>

<details>
<summary>

#### [Mathematical operations](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_3/math-operations/). Деталі завдання

</summary>

* Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
* Користувач вводить 2 числа через 2 `prompt`, і повідомлення виводиться за допомогою `alert` з таким результатом:

> Користувач ввів 2 і 2:  
2+2=4  
2-2=0  
2*2=4  
2/2=1  

</details>

<details>
<summary>

#### [Calculator](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_3/calculator/). Деталі завдання

</summary>

Створити скрипт, який повинен виконувати наступне:  

* питаємо у користувача, що він хоче зробити (add, sub, mult, div);
* питаємо у користувача перше число;
* запитуємо у користувача друге число;
* виводимо результат дії (add, sub, mult, div) з усіма операндами.

> Наприклад "2 + 3 = 5"

</details>

## Lesson 2

<details>
<summary>

#### [Git. Github](https://github.com/JuliaLuccio/Zhukovska-Front-End-Pro-21.10.2022). Деталі завдання

</summary>

* Запушити репозиторій у хмару
* Внести зміни до локального репозиторію
* Запушити зміни у хмару

</details>

<details>
<summary>

#### [Numbers and Strings](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_2/). Деталі завдання

</summary>

* Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (`конкатенація`)
* Розкласти за цифрами 5-значне число і вивести у тому ж порядку через пробіл (`шаблонні рядки/інтерполяція`)

</details>

## Lesson 1

<details>
<summary>

#### [Hello User](https://julialuccio.github.io/Zhukovska-Front-End-Pro-21.10.2022/Lesson_1/). Деталі завдання

</summary>

* За допомогою `prompt` запитати ім'я користувача.  
* За допомогою `alert` вивести *"Hello, John! How are you?"*. Де *John* - це те, що ввів користувач.  
* За допомогою атрибуту `defer` та методу `addEventListener`, який відстежує подію `DOMContentLoaded`, виконати сценарій скрипта після аналізу сторінки та завантаження DOM дерева.

</details>
