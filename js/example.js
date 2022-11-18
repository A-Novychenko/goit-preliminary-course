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

// const getRectArea = function (dimensions) {
//   const side = dimensions.split(' ');

//   return side[0] * side[1];
// };
// console.log(getRectArea('8 11'));

// Example 4 - Логування елементів Напиши функцію logItems(items), яка отримує масив та використовує
// цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення форматі <номер
// елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 –
// Mango, а для індексу 2 виведе 3 – Ajax.

// ``js function logItems(items) {}

// logItems(['Mango', 'Poly', 'Ajax']); logItems(['🍎', '🍇', '🍑', '🍌', '🍋']); ``

// const logItems = function (items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`№:${i + 1} елемент: ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// Example 5 - Логування контактів Напиши функцію printContactsInfo(names, phones) яка виводить у
// консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен
// та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на
// відповідність. Кількість імен та телефонів гарантовано однакове.

// ``js function printContactsInfo(names, phones) {}

// printContactsInfo( 'Jacob, William, Solomon, Artemis',
// '89001234567,89001112233,890055566377,890055566300', ); ``

// const printContactsInfo = function (names, phones) {
//   const nameClients = names.split(', ');
//   const phoneClients = phones.split(',');

//   for (let i = 0; i < nameClients.length; i += 1) {
//     console.log(`Клиент: ${nameClients[i]} и его тел.:${phoneClients[i]}`);
//   }
// };

// printContactsInfo(
//   'Jacob, William, Solomon, Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// Example 6 - Пошук найбільшого елемента Напиши функцію findLargestNumber(numbers) яка шукає найбільше
// число в масиві.

// ``js function findLargestNumber(numbers) {}

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]))); // 94 console.log(findLargestNumber([49, 4,
// 7, 83, 12]))); // 83 ``

// const findLargestNumber = function (numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (max < number) {
//       max = number;
//     }
//   }
//   return max;
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12]));
// // 83 ``

// Example 7 - Середнє значення Напишіть функцію calAverage() яка приймає довільну кількість аргументів
// і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// ``js function calAverage() {}

// console.log(calAverage(1, 2, 3, 4)); // 2.5 console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2 ``

// const calAverage = function (...args) {
//   let sum = 0;

//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum / args.length;
// };

// console.log(calAverage(1, 2, 3, 4));
// // 2.5
// console.log(calAverage(14, 8, 2));
// // 8
// console.log(calAverage(27, 43, 2, 8, 36));
// // 23.2 ``

// Example 8 - Форматування часу Напиши функцію formatTime(minutes) яка переведе значення minutes
// (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// ``js const hours = Math.floor(totalMinutes / 60); const minutes = totalMinutes % 60;
// console.log(hours); console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0); const doubleDigitMinutes =
// String(minutes).padStart(2, 0); console.log(${doubleDigitHours}:${doubleDigitMinutes});

// function formatTime(minutes) {}

// console.log(formatTime(70)); // "01:10" console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01" ``

// const formatTime = function (minutes) {
//   return `${Math.floor(minutes / 60)}:${minutes % 60 < 10 ? 0 : ''}${minutes % 60}`;
// };

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01" ``

// Example 9 - Колекція курсів (includes, indexOf, push і т.д.) Напишіть функції для роботи з колекцією
// навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції removeCourse(name) - видаляє курс з колекції
// updateCourse(oldName, newName) - змінює ім'я на нове ``js const courses = ['HTML', 'CSS',
// 'JavaScript', 'React', 'PostgreSQL'];

// addCourse('Express'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL',
// 'Express'] addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL',
// 'Express'] removeCourse('Vue'); // 'Курс з таким іменем не знайдено'

// updateCourse('Express', 'NestJS'); console.log(courses); // ['HTML', 'CSS', 'JavaScript',
// 'PostgreSQL', 'NestJS'] ``

// ВАРИАНТ 1

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']
//   .join(' ')
//   .toLowerCase()
//   .split(' ');

// console.log('Початковий список', courses);
// const addName = prompt('Який курс додати?').toLowerCase(); //'Express';
// const removeName = prompt('Який курс видалити?').toLowerCase(); //'React';
// const updNameOld = prompt('Який курс змінити?').toLowerCase(); //'Express';
// const updNameNew = prompt('На який курс замінити').toLowerCase(); //'NestJS';

// const addCourse = function (coursesList, addEl) {
//   if (!coursesList.includes(addEl)) {
//     coursesList.push(addEl);
//     return `Курс ${addEl}добавлено`;
//   }

//   return 'У вас вже є такий курс';
// };

// const removeCourse = function (coursesList, removeName) {
//   if (coursesList.indexOf(removeName) !== -1) {
//     coursesList.splice(coursesList.indexOf(removeName), 1);
//     return `Курс ${removeName} видалено!`
//   }

//   return `Курс не знайдено`;
// };

// const updateCourse = function (coursesList, updNameOld, updNameNew) {
//   if (coursesList.indexOf(updNameOld) !== -1) {
//     coursesList.splice(coursesList.indexOf(updNameOld), 1, updNameNew);
//     return `Курс ${updNameOld} змінено на ${updNameNew}`;
//   }

// return `Курс не знайдено`;
// };

// addCourse(courses, addName);
// removeCourse(courses, removeName);
// updateCourse(courses, updNameOld, updNameNew);
// console.log('Змінений список', courses);

// ВАРИАНТ 2

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL']
//   .join(' ')
//   .toLowerCase()
//   .split(' ');

// console.log('Початковий список', courses);
// const addName = prompt('Який курс додати?').toLowerCase(); //'Express';
// // const removeName = prompt('Який курс видалити?').toLowerCase(); //'React';
// // const updNameOld = prompt('Який курс змінити?').toLowerCase(); //'Express';
// // const updNameNew = prompt('На який курс замінити').toLowerCase(); //'NestJS';

// const includesCourse = function (coursesList, inputName) {
//   if (coursesList.indexOf(inputName) === -1) {
//     return false;
//   }

//   return true;
// };

// const addCourse = function (coursesList, addEl) {
//   return !includesCourse(coursesList, addEl) ? coursesList.push(addEl) : 'У вас вже є такий курс';
// };

// // const removeCourse = function (coursesList, removeName) {
// //   includesCourse(coursesList, removeName);

// //   return includesCourse(coursesList, removeName)
// //     ? coursesList.splice(coursesList.indexOf(removeName), 1)
// //     : `Курс не знайдено`;
// // };

// // const updateCourse = function (coursesList, updNameOld, updNameNew) {
// //   return includesCourse(coursesList, updNameOld)
// //     ? coursesList.splice(coursesList.indexOf(updNameOld), 1, updNameNew)
// //     : `Курс не знайдено`;
// // };
// console.log(addCourse(courses, addName));
// // console.log(removeCourse(courses, removeName));
// // console.log(updateCourse(courses, updNameOld, updNameNew));

// console.log('Змінений список', courses);

// Вариант решения из урока
/**
 * Task 9 - Колекція курсів.
 * Напишіть функції для роботи з колекцією навчальних курсів `courses`:
 * ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
 *
 * - `addCourse(name)` - додає курс до кінця колекції
 * - `removeCourse(name)` - видаляє курс з колекції
 * - `updateCourse(oldName, newName)` - змінює ім'я на нове
 */

// 1) Додаємо курс до колекції `addCourse`
//   1.1 створити функцію додавання курсу - function
//   1.2 оголосити параметр функції, який прийматиме значення аргумента для додавання
//   1.3 додамо курс до колекції - push
//   1.4 Повернемо оновлену колекцію - return

// 2) Видалити курс із колекції `removeCourse`
//   2.1 створити функцію видалення курсу
//   2.2 оголосити параметр функції, який прийматеме значення аргумента для видалення
//   2.3 Перевірити чи є курс у колекції - indexOf
//   2.4 Якщо є, видаляємо - splice
//   2.5 Повертаємо із функції елемент який був видалений

// 3) Оновлення курса `updateCourse`
//   1. Створюємо функцію оновлення курсу, старе імʼя замінюємо новим
//   2. Даємо два параметра: старе імя, нове імя(oldName, newName)
//   3. Перевірити чи є курс у колекції - indexOf
//   4. Якщо є, записуємо нове значення по індексу

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// /** Щоб додати інтерактивности, запитуємо користувача ввести дані - prompt */
// const courseName = prompt('Введіть назву курсу');
// const newName = prompt('Введіть нове імʼя');

// const addCourse = function(newCourse) {

//   if (courses.includes(newCourse)) {
//     console.log('Такий курс вже є');
//     return // ранній вихід із функції
//   }

//   courses.push(newCourse);
//   return courses; // Памʼятайте, що змінна courses це посилання на масив!
// }

// const removeCourse = function (courseName) {

//   const index = courses.indexOf(courseName);

//   if (index === -1) {
//     console.log('такого курсу нема')
//     return
//   }

//   const deletedCourses = courses.splice(index, 1);
//   return deletedCourses
// }

// const updateCourse = function (oldName, newName) {
//   const index = courses.indexOf(oldName);

//   if (index === -1) {
//     console.log('такого курсу нема')
//     return
//   }

//   courses[index] = newName
// }

// /** checkCourseName - функція в яку ми винесли перевірку елемнту в масиві. */
// const checkCourseName = function (value) {
//   const index = courses.indexOf(value);

//   if (index === -1) {
//     console.log('такого курсу нема')
//     return false
//   } else {
//     console.log('Такий курс вже є');
//     return true
//   }
// }

// /** Дублюю ті самі функції, але тепер з викристанням винесеної перевірки в окрему функцію */
// // const addCourse = function(newCourse) {

// //   if (checkCourseName(newCourse)) return

// //   courses.push(newCourse);
// //   return courses;
// // }

// // const removeCourse = function (courseName) {

// //   if (!checkCourseName(courseName)) return

// //   const deletedCourses = courses.splice(index, 1);
// //   return deletedCourses
// // }

// // const updateCourse = function (oldName, newName) {
// //   if (!checkCourseName(oldName)) return
// //   courses[index] = newName
// // } -->

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Модуль 3. Заняття 5. Об'єкти

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Task 1.
// - Напиши скрипт, який для об'єкта `user`, послідовно:
// - - додає поле `mood` зі значенням `'happy'`
// - - замінює значення `hobby` на `'skydiving'`
// - - замінює значення `premium` на `false`
// - - виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи `Object.keys()` та
//     `for...of` \*/

// const user = {
//   hobby: 'html',
//   premium: false,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = true;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// - Task 2.
// - У нас є об'єкт, де зберігаються зарплати нашої команди.
// - Напишіть код для підсумовування всіх зарплат і збережіть
// - результат у змінній sum. Повинно вийти 390.
// - Якщо об'єкт `salaries` порожній,
// - то результат має бути 0. \*/

// const salaries = { John: 100, Ann: 160, Pete: 130 };

// const sumSalaries = function (salaries) {
//   let sum = 0;
//   const valuesSalaries = Object.values(salaries);

//   for (const value of valuesSalaries) {
//     sum += value;
//   }

//   return sum;
// };
// console.log(sumSalaries(salaries));

// /\*\* Example 3

// - Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив
// - об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість
// - каміння з таким ім'ям, ціною та кількістю з об'єкта \*/
// const stoneName = 'Діамант';
// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// const calcTotalPrice = function (stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       return stone.price * stone.quantity;
//     }
//   }
// };

// const total = calcTotalPrice(stones, stoneName);

// console.log(`Сумма каміння "${stoneName}", яке є в наявності ${total} кредитів`);

// Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// // Кожна транзакція це об'єкт із властивостями: id, type та amount
// const account = {
//   balance: 0, // Поточний баланс рахунку
//   transactions: [], // Історія транзакцій

//   //  Метод створює та повертає об'єкт транзакції. Приймає суму та тип транзакції.
//   createTransaction(amount, type) {
//     return {
//       type,
//       amount,
//       id: this.transactions.length,
//     };
//   },

//   //    * Метод, що відповідає за додавання суми до балансу. Приймає суму транзакції. Викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій
//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//     this.balance += amount;
//   },

//   // Метод, що відповідає за зняття суми з балансу. Приймає суму транзакції. Викликає createTransaction для створення об'єкта транзакції
//   // після чого додає його до історії транзакцій. Якщо amount більше ніж поточний баланс, виводь повідомлення про те, що зняття такої суми не можливе, недостатньо коштів.
//   withdraw(amount) {
//     if (amount <= this.getBalance()) {
//       this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//       this.balance -= amount;

//       return;
//     }
//     console.log(`Зняття такої суми не можливе, недостатньо коштів`);
//   },

//   //  Метод повертає поточний баланс
//   getBalance() {
//     return this.balance;
//   },

//   // Метод шукає та повертає об'єкт транзакції по id
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }

//     console.log(`НЕ ЗНАЙДЕНО!!!`);
//   },

//   //  Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій
//   getTransactionTotal(type) {
//     let totalType = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         totalType += transaction.amount;
//       }
//     }

//     return totalType;
//   },
// };

// account.deposit(10000);
// account.withdraw(250);
// account.deposit(1000);
// account.withdraw(750);
// account.withdraw(5000);

// console.table(account.transactions);
// console.log(account.getTransactionDetails(3));
// console.log('Пополнено: ', account.getTransactionTotal(Transaction.DEPOSIT));
// console.log('Потрачено: ', account.getTransactionTotal(Transaction.WITHDRAW));
// console.log('Текущий баланс: ', account.getBalance());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
// Задача "КОРЗИНА" с лекции Репеты
//
//
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },

//   add(product) {
//     const { items } = this; // массив  обьектов добавленных товаров

//     //перебираем массив обьектов
//     for (const item of items) {
//       if (item.name === product.name) {
//         // если имя в обьекте массива всех добавленых товаров равно имени обьекта товара который добавляем, то сделай следущее: добавь к количеству +1 и прерви функцию
//         //item ссылка на обьект массива cart.items
//         item.quantity += 1; // добавляем свойство quantity и увеличиваем на 1
//         return; //прерываем фунцию, так как уже не нужно добавлять товар, потому что изменили количество существующего товара
//       }
//     }

//     //создаем новый обьект, в него распыляем обьект который добавляем и добавляем свойство "количество" со значением 1(так как мы добавляем 1 товар)
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     //пушим обьект нового товара в массив обьектов добавленных товаров
//     items.push(newProduct);
//   },

//   remove(productName) {
//     const { items } = this;

//     for (let i = 0; i < items.length; i += 1) {
//       if (items[i].name === productName) {
//         items.splice(i, 1);

//         return;
//       }
//     }
//   },

//   clear() {
//     this.items = [];
//   },

//   countTotalPrice() {
//     let total = 0;
//     for (const { price, quantity } of this.items) {
//       total += price * quantity;
//     }
//     return total;
//   },

//   increaseQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity += 1;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       if (item.name === productName) {
//         item.quantity -= 1;
//       }
//     }
//   },
// };

// cart.add({ name: '🍎', price: 50 });
// cart.add({ name: '🍇', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍋', price: 60 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });
// cart.add({ name: '🍓', price: 110 });

// // cart.remove('🍓');
// // cart.clear();
// console.log(cart.countTotalPrice());
// console.table(cart.items);

// cart.decreaseQuantity('🍋');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');
// cart.increaseQuantity('🍓');

// console.table(cart.items);
// console.log(cart.countTotalPrice());

//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const test = {
//   name: 'test',
//   items: [
//     { quantity: 1, price: 1000 },
//     { quantity: 2, price: 2000 },
//     { quantity: 3, price: 3000 },
//   ],

//   countTotalPrice() {
//     let total = 0;
//     for (const { price } of this.items) {
//       console.log(price);

//     }
//     // for (const { price, quantity } of this.items) {
//     //   total += price * quantity;
//     // }
//     // return total;
//   },
// };
// test.countTotalPrice();
// console.log(test.items);

// const cartAutoParts = {
//   brand: 'myshop',
//   productList: [],

//   getproductList() {
//     return this.productList;
//   },

//   addNewProduct(productCard) {
//     const { productList } = this;

//     for (const product of productList) {
//       if (product.name === productCard.name) {
//         product.quantity += 1;

//         return;
//       }
//     }

//     const createNewProdact = {
//       ...productCard,
//       quantity: 1,
//     };

//     productList.push(createNewProdact);
//   },
// };

// console.log(cartAutoParts.getproductList());

// cartAutoParts.addNewProduct({ name: 'kyb', price: 2000 });
// cartAutoParts.addNewProduct({ name: 'sachs', price: 5500 });
// cartAutoParts.addNewProduct({ name: 'sachs', price: 5500 });
// cartAutoParts.addNewProduct({ name: 'monro', price: 1800 });

// console.table(cartAutoParts.getproductList());

////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
//************   МОДУЛЬ 3 ЗАНЯТТЯ 6 */
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//Example 1
//
// // - Деструктуризація Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
// незалежних аргументів.

// function calcBMI(weight, height) { const numericWeight = Number(weight.replace(',', '.')); const
// numericHeight = Number(height.replace(',', '.')); return Number((numericWeight / numericHeight \*\*
// 2).toFixed(1)); }

// // Було // console.log(calcBMI('88,3', '1.75')); // console.log(calcBMI('68,3', '1.65')); //
// console.log(calcBMI('118,3', '1.95'));

// // Очікується console.log( calcBMI({ weight: '88,3', height: '1.75', }), ); console.log( calcBMI({
// weight: '68,3', height: '1.65', }), ); console.log( calcBMI({ weight: '118,3', height: '1.95', }),
// );

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number(((numericWeight / numericHeight) * 2).toFixed(1));
// }

// // Було //
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(calcBMI({ weight: '88,3', height: '1.75' }));
// console.log(calcBMI({ weight: '68,3', height: '1.65' }));
// console.log(calcBMI({ weight: '118,3', height: '1.95' }));

//Example 2 //

// - Деструктуризація Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
//   незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

// // Було // printContactsInfo( // 'Jacob,William,Solomon,Artemis',
// //'89001234567,89001112233,890055566377,890055566300', // );

// // Очікується
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//Example3
//-----------------------------------------------------------------------------------------

// - Глибока деструктуризація Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
//   набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // Було // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Очікується
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );
// // "Cyberdyne Systems has 200 bots in stock" //

//-----------------------------------------------------------------------------------------
//Example 4 - Деструктуризація // Напиши функцію так, щоб вона приймала об'єкт параметрів із
// властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої
// компанії.

// Рішення

// Варіант 1
// function getStockReport({ companyName, stock }) {
//   const items = Object.values(stock);

//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }

//   return `${companyName} has ${total} items in stock`;
// }

// // Перевірка
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );
// // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// );
// // "Belacci has 35 item in stock"

// Варіант 2
// из урока

// const companies = [
//   { companyName: 'Cyberdyne Systems', stock: { repairBots: 150, defenceBots: 50 } },
//   { companyName: 'Belacci', stock: { shoes: 20, skirts: 10, hats: 5 } },
// ];

// function getStockReport(companies) {
//   for (let { companyName, stock } of companies) {
//     let total = 0;
//     for (let value of Object.values(stock)) {
//       total += value;
//     }

//     console.log(`${companyName} has ${total} items in stock`);
//   } // return `${companyName} has ${total} items in stock`
// }

// getStockReport(companies);

// Example 5 - // Операція spread Напиши функцію createContact(contact) так, щоб вона повертала новий
// об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в
// contact немає такої властивості.

// Рішення
// function createContact(contact) {
//   const newObject = {
//     list: 'default',
//     ...contact,
//     id: generateId(),
//   };
//   return newObject;
// }

// console.log(createContact({ name: 'Mango', email: 'mango@mail.com', list: 'friends' }));
// console.log(createContact({ name: 'Poly', email: 'poly@hotmail.com' }));

// function generateId() {
//   return '_' + Math.random().toString().substring(2, 9);
// }

// Example 6 //

// - Операція rest Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із
//   властивістю fullName, замість firstName та lastName.

// // Рішення
// function transformUsername({ firstName, lastName, ...rest }) {
//   return {
//     ...rest,
//     fullName: `${firstName} ${lastName}`,
//   };
// }

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////                          41 задача                                        //////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;

//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === oldName) {
//         potions[i].name = newName;
//         return;
//       }
//     }

//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// const newPotion = { name: 'Stone skin', price: 520 };

// console.log(atTheOldToad.addPotion(newPotion));

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////                          41 задача                                        //////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//*****
//
//
//
//
//
//
//
//
//
//
//
//
////////////////////////////////////                                Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach                  ///////////////////

//
//
//
//
//
//
// Example 1 - Коллбек функції

// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт
// товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому
// створений об'єкт. logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в
// консоль // your code here

// const createProduct = (obj, callback) => {
//   const newObject = {
//     ...obj,
//     id: 564654,
//   };
//   callback(newObject);
// };
// const logProduct = product => console.log(product);

// const logTotalPrice = ({ quantity, price }) => console.log(quantity * price);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// Example 2 - Коллбек функції

// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess,
// onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в
// іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і
// onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       return onError(amount);
//     }

//     return onSuccess(amount);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       return onError(amount);
//     }
//     return onSuccess(amount);
//   },
// };

// const handleError = amount => console.log(`${amount} --- EROR !!!`);
// const handleSuccess = amount => console.log(`${amount} --- Successfully!`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Коллбек функції

// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка
// застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику коллбека.

// const employees = [
//   { name: 'Artur', bonus: 64.5 },
//   { name: 'Ivan', bonus: 49.2 },
//   { name: 'Makar', bonus: 36 },
//   { name: 'Anastasiya', bonus: 25 },
//   { name: 'Olha', bonus: 165.13 },
// ];

// const each = (array, callback) => {
//   const newArray = [];

//   for (const arr of array) {
//     arr.bonus = callback(arr.bonus);
//     newArray.push(arr);
//   }

//   return newArray;
// };

// console.table(each(employees, value => Math.floor(value)));

// Example 4 - Стрілочні функції

// Виконайте рефакторинг коду за допомогою стрілочних функцій.

const createProduct = (partialProduct, callback) => {
  const product = { id: Date.now(), ...partialProduct };
  callback(product);
};

const logProduct = product => console.log(product);

const logTotalPrice = product => console.log(product.price * product.quantity);

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
