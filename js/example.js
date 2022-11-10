/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// Модуль 1. Занятие 1. Переменные, типы и операторы
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 1 - Математические операторы Выведи на экран общее количество яблок и винограда. Разницу
// яблок и винограда.

// const apples = 50;
// const grapes = 150;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff);

///////////////////////////////////////////////////////////////////////////////////////////

// Example 2 - Комбинированные операторы Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

/////////////////////////////////////////////////////////////////////////////////////////////

// Example 3 - Приоритет операторов Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result1 = 108 + 223 - 2 * 5;
// console.log(result1);
// const result2 = 108 + 223 - 2 / 5;
// console.log(result2);

////////////////////////////////////////////////////////////////////////////////////////////

// Example 4 - Класс Math Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д.
// значения переменной value. Используй методы Math.floor(), Math.ceil() и Math.round(). Проверь что
// будет в консоли при значениях 27.3 и 27.9.

// const value = 5.5;
// let res1 = Math.floor(value);
// // 5;
// let res2 = Math.ceil(value);
// // 6;
// let res3 = Math.round(value);
// // 6;

// console.log(value);
// console.log(res1);
// console.log(res2);
// console.log(res3);

//////////////////////////////////////////////////////////////////////////////////////////////

// Example 5 - Шаблонные строки Составь фразу с помощью шаблонных строк A has B bots in stock, где A,
// B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

//////////////////////////////////////////////////////////////////////////////////////////////

// Example 6 - Методы строк и чейнинг Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для
// задачи). Нецелые числа могут быть заданы в виде 24.7 или 24,7, то есть в качестве разделителя
// дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = '88,3';
// let height = '1.75';

// weight = Number.parseFloat(weight.replace(',', '.'));
// height = Number.parseFloat(height.replace(',', '.'));

// const bmi = (weight / Math.pow(height, 2)).toFixed(1);
// console.log(bmi); // 28.8

////////////////////////////////////////////////////////////////////////////////////////////

// Example 7 - Операторы сравнения и приведение типов Каким будет результат выражений?

// console.log(5 > 4); //true

// console.log(10 >= '7'); //true

// console.log('2' > '12'); //true

// console.log('2' < '12'); //false

// console.log('4' == 4); //true

// console.log('6' === 6); //false

// console.log('false' === false); //false

// console.log(1 == true); //true

// console.log(1 === true); //false

// console.log('0' == false); //true

// console.log('0' === false); //false

// console.log('Papaya' < 'papaya'); // true???

// console.log('Papaya' === 'papaya'); //false

// console.log(undefined == null); //true

// console.log(undefined === null); //false

// console.log('1' > '12'); //false сравнивает посимвольно: "1" = "1" ==> "" < "2" поэтому строка 12 больше

// console.log('1' < '12'); //true

///////////////////////////////////////////////////////////////////////////////////////////////////

// Example 8 - Логические операторы Каким будет результат выражений?

// console.log(true && 3); //3

// console.log(false && 3); //false

// console.log(true && 4 && 'kiwi'); //'kiwi'

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //false

// console.log(null || (2 && 3) || 4); //true

// console.log((1 && 0 && 2) > 0); //false

////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 9 - Значение по умолчанию и оператор нулевого слияния

// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или
// null. В противном случае должно присваиваться значение defaultValue. Проверь работу скрипта для
// слепдующих значений переменной incomingValue: null, undefined, 0, false. Используй оператор ??
// (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// // ?? - оператор нулвого слияния - возвращает правый операнд если левый равен только undefined или null
// console.log(value);

////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 10 - Опертор % и методы строк Напиши скрипт который переведёт значение
// totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10 450 покажет 07:30 1441 покажет 24:01

//1.перевести минуты в часы
//--вычеслить часы
//--вычеслить минуты
//--2.создать переменную время в формате чч:мм
//3.вывести в консоль время

// const totalMinutes = 1441;
// const totalHours = Math.floor(totalMinutes / 60);
// let totalHoursMinutes = totalMinutes % 60;
// let zero;

// if (totalHours >= 0 && totalHours <= 9) {
//   zero = 0;
// } else {
//   zero = '';
// }

// if (totalHoursMinutes < 10) {
//   totalHoursMinutes = '0' + totalHoursMinutes;
// }

// const time = `Время ${zero}${totalHours}:${totalHoursMinutes}`;
// console.log(time);

// //решение из урока
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//Модуль 1. Занятие 2. Ветвления. Циклы
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Example 1 - Ввод пользователя и ветвления Используя
// конструкцию if..else и prompt, напиши код, который будет спрашивать: "Какое официальное название
// JavaScript?". Если пользователь вводит ECMAScript, то показывай alert со строкой "Верно!", в
// противном случае - "Не знаете? ECMAScript!"

// let userInput = prompt('Какое официальное название JavaScript?');

// if (userInput === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

///////////////////////////////////////////////////////////////////////////

// Example 2 - Отображение времени (if...else) Напиши скрипт для отображения часов и минут в консоли
// браузера в виде строки формата "14 ч. 26 мин.". Если значение переменной minutes равно 0, то выводи
// строку "14 ч.", без минут.
// const hours = 14;
// const minutes = 0;
// let timestring;

// if (minutes === 0) {
//   console.log(`Время: ${hours} ч.`);
// } else {
//   console.log(`Время: ${hours} ч. ${minutes} мин.`);
// }

// решение из урока
// if (minutes > 0) {
//   timestring = `${hours} ч. ${minutes} мин.`;
// } else {
//   timestring = `${hours} ч.`;
// }
// console.log(timestring);

///////////////////////////////////////////////////////////////////////////

// Example 3 - Ветвеления Напиши скрипт, который выводит в консоль строку "Это положительное число",
// если в prompt пользователь ввел число больше нуля. Если был введен ноль, выводи в консоль строку
// "Это ноль". Если передали отрицательное число, в консоли должна быть строка "Это отрицательное
// число".

// const userInput = Number.parseFloat(prompt('Введите число'));

// if (userInput === 0) {
//   console.log('Это ноль');
// } else if (userInput > 0) {
//   console.log('Это положительное число');
// } else {
//   console.log('Это атрицацательное число');
// }

/////////////////////////////////////////////////////////////////////////

// Example 4 - Вложенные ветвления Напиши скрипт, который сравнивает числа в переменных a и b. Если оба
// значения больше 100, то выведи в консоль максимальное из них. В противном случае в консоли должна
// быть сумма значения b и числа 512.

// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

///////////////////////////////////////////////////////////////////////

// Example 5 - Форматирование ссылки (endsWith) Напиши скрипт который проверяет заканчивается ли
// значение переменной link символом /. Если нет, добавь в конец значения link этот символ. Используй
// конструкцию if...else.

// let link = 'https://my-site.com/about'; // Пиши код ниже этой строки
// if (link.endsWith('/')) {
// } else {
//   link += '/';
// }
// // Пиши код выше этой строки
// console.log(link);

//////////////////////////////////////////////////////////////////////

// Example 6 - Форматирование ссылки (includes и логическое «И») Напиши скрипт который проверяет
// заканчивается ли значение переменной link символом /. Если нет, добавь в конец значения link этот
// символ, но только в том случае, если в link есть подстрока "my-site". Используй конструкцию
// if...else.

//********** */ Вариант с проверкой на наличие '/' и с использованием if...else
// let link = 'https://somesite.my-site.com/about'; // Пиши код ниже этой строки
// if (link.endsWith('/')) {
//   console.log('Да, заканчивается на /');
// } else {
//   if (!link.endsWith('/') && link.includes('my-site')) {
//     link += '/';
//   }
// }

//********** */ Вариант с использованием if
// let link = 'https://somesite.my-site.com/about'; // Пиши код ниже этой строки
// if (!link.endsWith('/') && link.includes('my-site')) {
//   link += '/';
// }

// // // Пиши код выше этой строки
// console.log(link);

///////////////////////////////////////////////////////////////////////

// Example 7 - Форматирование ссылки (тернарный оператор) Выполни рефакторинг кода задачи номер 6
// используя тернарный оператор.

// let link = 'https://somesite.my-site.com/about';
// // if (link.includes('my-site') && !link.endsWith('/')) {
// //   link += '/';
// // }
// link.includes('my-site') && !link.endsWith('/') ? (link += '/') : null;

// console.log(link);

///////////////////////////////////////////////////////////////////////

// Example 8 - if...else и логические операторы Напиши скрипт который будет выводить в консоль браузера
// строку в зависимости от значения переменной hours.

// Если значение переменной hours:

// меньше 17, выводи строку "Pending" больше либо равно 17 и меньше либо равно 24, выводи строку
// "Expires" больше 24, выводи строку "Overdue"

// const hours = 25;

// if (hours < 17) {
//   console.log('Pending');
// } else if (hours >= 17 && hours <= 24) {
//   console.log('Expires');
// } else {
//   console.log('Overdue');
// }

///////////////////////////////////////////////////////////////////////

// Example 9 - Дедлайн сдачи проекта (if...else) Напиши скрипт для отображения времени дедлайна сдачи
// проекта. Используй конструкцию if...else.

// Eсли до дедлайна 0 дней - выведи строку "Сегодня" Eсли до дедлайна 1 день - выведи строку "Завтра"
// Eсли до дедлайна 2 дня - выведи строку "Послезавтра" Eсли до дедлайна 3+ дней - выведи строку "Дата
// в будущем"

// Если до дедлайна атрицательное значение то вывести "Дедлайн просрочен"
// const daysUntilDeadline = 0; // Пиши код ниже этой строки
// let daysUntilDeadlineOverdue;
// if (daysUntilDeadline < 0) {
//   daysUntilDeadlineOverdue = daysUntilDeadline;
// }

// if (daysUntilDeadline === 0) {
//   console.log('Сегодня');
// } else if (daysUntilDeadline === 1) {
//   console.log('Завтра');
// } else if (daysUntilDeadline === 2) {
//   console.log('Послезавтра');
// } else if (daysUntilDeadline === daysUntilDeadlineOverdue) {
//   console.log('Дедлайн просрочен');
// } else {
//   console.log('Дата в будущем');
// }

//////////////////////////////////////////////////////////////////////////

// Example 10 - Дедлайн сдачи проекта (switch) Выполни рефакторинг кода задачи номер 9 используя
// switch.

// const daysUntilDeadline = 0;
// let daysUntilDeadlineOverdue;
// if (daysUntilDeadline < 0) {
//   daysUntilDeadlineOverdue = daysUntilDeadline;
// }

// switch (daysUntilDeadline) {
//   case 0:
//     console.log('Сегодня');
//     break;
//   case 1:
//     console.log('Завтра');
//     break;
//   case 2:
//     console.log('Послезавтра');
//     break;
//   case daysUntilDeadlineOverdue:
//     console.log('Дедлайн просрочен');
//     break;
//   default:
//     console.log('Дата в будущем');
// }

///////////////////////////////////////////////////////////////////////////

// Example 11 - Цикл for Напиши цикл for который выводит в консоль браузера числа по возрастанию от min
// до max, но только если число кратное 5.

// const max = 100;
// const min = 20;

// //в переменных числа кратные 5
// for (let i = min; i <= max; i += 5) {
//   console.log(i);
// }
// //в переменных кратные числа
// for (let i = min; i <= max; i += 1) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

////////////////////////////////////////////////////////////////////////////

// Example 12 - Ввод пользователя и ветвления Напиши скрипт, который будет спрашивать логин с помощью
// prompt и логировать результат в консоль браузера.

// Если посетитель вводит "Админ", то prompt запрашивает пароль Если ничего не введено или нажата
// клавиша Esc - вывести строку "Отменено" В противном случае вывести строку "Я вас не знаю" Пароль
// проверять так:

// Если введён пароль "Я админ", то вывести строку "Здравствуйте!" Иначе выводить строку "Неверный
// пароль"

// let login = prompt('Введите логин');
// let password;
// console.log(login);

// if (login === 'Админ') {
//   password = prompt('Введите пароль');
//   if (password === 'Я админ') {
//     console.log('Здравствуйте!');
//   } else {
//     console.log('Неверный пароль');
//   }
// } else if (login === '' || login === null) {
//   console.log('Отменено');
// } else {
//   console.log('Я вас не знаю');
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//Модуль 2. Занятие 1.
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// - Task 1 Створіть масив genres з елементами "Jazz" та "Blues". Додайте «Рок-н-рол» до кінця.
//   Виведіть у консоль перший елемент масиву. Виведіть останній елемент масиву в консоль. Код повинен
//   працювати для масиву довільної довжини. Видаліть перший елемент та виведіть його в консоль.
//   Вставте «Country» та «Reggae» на початок масиву.

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-рол');
// console.log('first element:', genres[0]);
// console.log('last element', genres[genres.length - 1]);
// const delElement = genres.shift();
// console.log('delete first element:', delElement);
// genres.unshift('Country', 'Reggae');
// console.log('update genres:', genres);

// - Task 2
// - Обчислити площу прямокутника. Значення сторін зберігаються в рядку '8 11'.

// const value = '8 11';
// const valueParties = value.split(' ');
// console.log(valueParties);

// const square = valueParties[0] * valueParties[1];
// console.log(square);

// - Task 3
// - Для кожного елемента масиву виведи в консоль рядок у форматі
// - номер*елемента: значення*елемента. Нумерація елементів має починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`Номер елемента: ${i + 1}, значення: ${fruits[i]}`);
// }

// Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.Кількість імен та телефонів гарантовано однакова.

// js const names = 'Jacob, William, Solomon, Artemis'; const phones = '89001234567,89001112233,890055566377,890055566300';

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const nameClient = names.split(', ');
// const phone = phones.split(',');

// for (let i = 0; i < nameClient.length; i += 1) {
//   console.log(`Клиент ${nameClient[i]} та його номер телефону ${phone[i]}`);
// }

// Example 5 - Масиви та рядки
// Напиши скрипт який виводить у консоль усі слова рядка окрім першого та останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь - якого рядка.

// js const string = 'Welcome to the future';

// const string = 'Welcome to the future';

// const array = string.split(' ');

// Вариант1
// const newArray = array.splice(1, array.length - 2);
// console.log(newArray);

// Вариант 2

// const newArray = array.slice(1, array.length - 1);
// console.log(newArray);

// Вариант 3

// const array2 = [];
// let newString = '';

// for (let i = 1; i < array.length - 1; i += 1) {
//   array2.push(array[i]);
// }

// newString = array2.join(' ');

// console.log(newString);

// Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить її в консоль.

// js const string = 'Welcome to the future';
// Вариант 1
// const string = 'Welcome to the future';
// const array = string.split('');
// const arrayRevers = [];
// let newString;
// for (let i = array.length - 1; i >= 0; i -= 1) {
//     arrayRevers.push(array[i]);
//     newString = arrayRevers.join('');

// }
// console.log(newString);

// Вариант 2
// const string = 'Welcome to the future';

// let newString = '';
// for (let i = string.length - 1; i >= 0; i -= 1) {
//   newString += string[i];
// }
// console.log(newString);

// Example 7 - Сортування масиву
// Напиши скрипт сортування масиву.

// js const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];

// langs.sort();
// console.log(langs);

// Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// js const numbers = [2, 17, 94, 1, 23, 37]; let min; console.log(min); // 1

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//   if (min > number) {
//     min = number;
//   }
// }
// console.log(min);
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Модуль 2. Заняття 4. Функції

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example 1 - Індекс маси тіла Напиши функцію calcBMI(weight, height) яка розраховує та повертає
// індекс маси тіла. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;
// const weightUderInput = prompt('Введіть вагу');
// const heightUderInput = prompt('Введіть зріст').replace(',', '.');

// const calcBMI = function (weight, height) {
//   return (weight / Math.pow(2, height)).toFixed(1);
// };

// const determinesDegree = function (index) {
//   if (index <= 16) {
//     console.log('Выраженный дефицит массы тела');
//   } else if ((index > 16) & (index <= 18.5)) {
//     console.log('Недостаточная (дефицит) масса тела');
//   } else if ((index > 18.5) & (index <= 25)) {
//     console.log('Норма');
//   } else if ((index > 25) & (index <= 30)) {
//     console.log('Избыточная масса тела (предожирение)');
//   } else {
//     console.log('Ожирение ');
//   }
// };

// const index = calcBMI(weightUderInput, heightUderInput);
// // console.log(index);
// determinesDegree(index);

// Example 2 - Найменше з чисел Напиши функцію min(a,b), яка повертає менше з чисел a та b.

// js console.log(min(2, 5)); // 2 console.log(min(3, -1)); // -1 console.log(min(1, 1)); // 1
// const min = function (a, b) {
//   return Math.min(a, b);
// };

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Example 3 - Площа прямокутника Напиши функцію getRectArea(dimensions) для обчислення площі
// прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядки.
// Значення гарантовано розділені пробілом.

// ``js function getRectArea(dimensions) {}

// console.log(getRectArea('8 11')); ``
