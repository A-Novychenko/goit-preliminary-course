//                   ПЕРЕМЕННЫЕ, ВВОД/ВЫВОД                   //

// let x;

// x = 500;
// console.log(x);
// x = typeof x;

// console.log(x);
// console.log(typeof x);

// const a = x + 'wwww';
// console.log(a);
// // alert(a);
// let date = 21;
// alert('Сьогодні ' + date + ' жовтня');
// date += 1;
// alert(`Завтра ${date} жовтня`);

// let bgc;

// bgc = confirm('Я перефарбую фон у зелений?');
// if (bgc === true) {
//   document.body.style.backgroundColor = 'green';
// }

// let userInput;
// userInput = Number.parseInt(prompt('Сколько Вам лет?'));
// console.log(userInput);
// console.log(typeof userInput);

// if (userInput >= 18) {
//   document.body.style.backgroundColor = 'green';
// } else {
//   document.body.style.backgroundColor = 'red';
// }

//                   ОСНОВНІ ОПЕРАТОРИ                    //
//                   математичні оператори                    //
// let result;
// const a = 1;
// const b = 2;
// const c = 3;
// const d = 10;
// const e = 100;
// const f = 100;
// const h = 100;

// result = a + b - (((c * d) / e) * f) / h;

// console.log(result);

// const x = 22;
// const y = 4;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15

//                   оператори порівняння                    //
// const a = NaN;
// const b = '10px';
// let res1;
// let res2;
// // let num = isNaN(Number(NaN));
// // let num2 = isNaN(Number('10px'));
// let num = Number.isNaN(NaN);
// let num2 = Number.isNaN(Number('10px'));
// console.log(num);
// console.log(num2);
// // let res1 = a > b;
// // res1 = a < b;
// res1 = a == b;
// res2 = num !== num2;

// // alert(res1);

// alert(res2);
// // console.log(typeof res1);

// const a = false;
// const b = 0;

// console.log(a === b);

//                   ЧИСЛА                    //

// let width = '50.5px';
// const width1 = Number(width);
// const width2 = Number.parseInt(width);
// const width3 = Number.parseFloat(width);
// console.log(width);
// console.log(typeof width);
// console.log(width1);
// console.log(typeof width1);
// console.log(width2);
// console.log(typeof width2);
// console.log(width3);
// console.log(typeof width3);

// const result = Number.isNaN(width2);
// console.log(result);
//               додавання дробових чисел         //

// *100 дадати і поділити на 100

// const a = 0.1;
// const b = 0.2;

// const result = (a * 100 + b * 100) / 100;

// console.log(result);
// console.log(result === 0.3);

// додати а результат скоротити

// const a = 0.1;
// const b = 0.2;

// const result = Number((a + b).toFixed(1));

// console.log(result);
// console.log(result === 0.3);

//                      КЛАС Math                    //
// let a = 1.9;

// a = Math.floor(a);
// // 1--- повертає число до крапки(найменше ціле)

// a = 1.2;
// a = Math.ceil(a);
// // 2--- повертає найближче більше ціле (якщо а = 2.1 або 2,8  то поверне 3)

// a = 1.5;
// a= Math
// console.log(a);

// console.log(Math.min(10, 20, 30, 100, 50));
// console.log(Math.max(10, 20, 30, 100, 50));

//                РЯДКИ                   //
//       Конкатенація - додавання(зшивання рядків)         //
// const a = 2;
// const b = 5;
// const c = '10';

// let res;

// res = a + b + c;
// console.log(res);

// const d = 'Mango';
// const e = 'Apple';
// // Звичайний рядок з підстановкою змінних. Фрукти
// res = 'фрукт 1: ' + d + ', фрукт 2: ' + e + '.';
// console.log(res);
// // Шаблонний рядок
// res = `фрукт 1: ${d}, фрукт 2: ${e}.`;
// console.log(res);
// //
//        Влстивості рядків
//
// const massage = 'Hello !';
// console.log(massage.length);
// console.log('                            '.length);

// const textSmall = 'ЦЕЙ ТЕКСТ ПОВИНЕН БУТИ В НИЖНЬОМУ РЕГІСТРІ';
// const textBig = 'цей текст повинен бути в верхньому регістрі';
// let s = textSmall.toLowerCase();
// let b = textBig.toUpperCase();
// console.log(s);
// console.log(b);

// const massageSmall = 'ПОВІДОМЛЕННЯ В НИЖНЬОМУ РЕГІСТРІ';
// const massageBig = 'повідомлення в верхньому регістрі';
// let mS = massageSmall.toLowerCase();
// let mB = massageBig.toUpperCase();
// console.log(mS);
// console.log(mB);

// const brand = 'DELL';
// const userInput = prompt('Вкажіть марку монітора').toUpperCase();

// if (brand === userInput) {
//   alert('GOOD!');
// } else {
//   alert('EROR');
// }

// const testIndex = 'Test';

// const index = testIndex.indexOf('et');
// console.log(index);

// const testIncludes = 'Перевіряє, чи міститься підрядок в рядку';

// const includes = testIncludes.includes('чи міс');
// console.log(includes);
// const endsWith = testIncludes.endsWith('дку');
// console.log(endsWith);

// const replace = testIncludes.replace('е', 'е.');
// console.log(replace);
// const replaceAll = testIncludes.replaceAll('е', 'е.');
// console.log(replaceAll);

// let phrase = 'My last name Novichenko';
// console.log(phrase);
// console.log(phrase.indexOf('N'));
// console.log(phrase.indexOf('c'));

// let pseudonym = phrase.slice(13, 17 + 1);
// pseudonym = pseudonym.replace('c', 'k');
// console.log(pseudonym);

// phrase = phrase.replace('last name Novichenko', 'pseudonym Novik');
// console.log(phrase);
//
//
//                 ЛОГІЧНІ ОПЕРАТОРИ                   //
//                  Логічне І   &&                 //
// console.log(1 && 5); // 5
// console.log(5 && 1); // 1
// console.log(0 && 2); // 0
// console.log(2 && 0); // 0
// console.log('' && 'Mango'); // ""
// console.log('Mango' && ''); // ""
// console.log('Mango' && 'Poly'); // 'Poly'
// console.log('Poly' && 'Mango'); // "Mango"

// //                  Логічне АБО   ||              //

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// //                  Логічне НЕ  !              //

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // false
// console.log(!'Mango'); // false
// console.log(!0); // true
// console.log(!''); // true

// const isOnline = true;
// const isNotOnline = !isOnline; // false
//
//
//                ВЕТВЛЕНИЯ                   //

// ************  if  ************ //

// let result = 0;
// const number = '5';

// if (number == 5) {
//   result = 100;
// }

// console.log(result);

// ************  if...else  ************ //

// let ifElse = 0;
// const x = 'dell';

// if (x === 'dell dc2421c') {
//   ifElse = 'if';
// } else {
//   ifElse = 'else';
// }
// console.log(ifElse);

// let dayNumber;
// const dayName = 'thursday';
// const dayName2 = 'monday';

// if (dayName === 'thursday') {
//   dayNumber = 4;
// } else {
//   dayNumber = 'day-x';
// }
// console.log(dayNumber);

// if (dayName2 === 'thursday') {
//   dayNumber = 4;
// } else {
//   dayNumber = 'day-x';
// }
// console.log(dayNumber);

// ************  else...if  ************ //

// let message;
// const color = 'red';
// const color = 'green';
// const color = 'yellow';
// const color = 'blue';

// if (color === 'green') {
//   message = 'Все добре';
// } else if (color === 'yellow') {
//   message = 'Попередження';
// } else if (color === 'red') {
//   message = 'УВАГА !';
// } else {
//   message = 'невірне значення';
// }
// console.log(message);

//  ************  тернарний оператор  ************ //
// Замінює if...else

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // "adult"

// const type1 = age >= 18 ? 'adult' : 'child';

// console.log('результат тернарного оператора:', type1);

// const chargedLevel = 30;
// const charged = chargedLevel >= 30 ? 'нужно зарядить' : 'достаточно заряжен';
// console.log(charged);

// const numberInput = 9;
// const number =
//   numberInput >= 10 ? `${numberInput} двухзначное число` : `${numberInput} однозначное число`;
// console.log(number);

// const day = 'понедельник';
// const currentDay =
//   day === 'понедельник' || 'вторник' || 'среда' || 'четверг' || 'пятница'
//     ? 'рабочий день'
//     : 'выходной';
// console.log(currentDay);

//  ************  Інструкція switch  ************ //
// switch#1
// let day;

// const dayInput = prompt('ВВЕДИТЕ ЧИСЛО ОТ 1 ДО 7');
// const numberCurrentDay = Number(dayInput);

// switch (numberCurrentDay) {
//   case 1:
//     day = 'понедельник';
//     break;
//   case 2:
//     day = 'вторник';
//     break;
//   case 3:
//     day = 'среда';
//     break;
//   case 4:
//     day = 'четверг';
//     break;
//   case 5:
//     day = 'пятница';
//     break;
//   case 6:
//     day = 'суббота';
//     break;
//   default:
//     day = 'воскресенье';
// }
// console.log(day);

// switch#2
// const color = 'red';
// let massage;

// switch (color) {
//   case 'yellow':
//     massage = 'проверьте, возможно есть ошибка';
//     break;
//   case 'green':
//     massage = 'правильно';
//     break;
//   case 'red':
//     massage = 'внимание';
//     break;
//   default:
//     massage = 'не верный ввод';
// }
// console.log(massage);

//  конструкция switch

// switch (условие - (имя переменной)переменная которая будет сравниваться) {
//     case значение: -  значение которое будет сравниватьс я(обьязательно строгое равенство ===) с условием switch
//     x = "значение" - значение которое присвоится переменной х в случае если case вернет true
//     break - передает выполнение кода после switch

//     если case вернул false то выполнение кода переходит к следующему case.Если все case вернули false то выполнение переходит к default.
//         default:
//              x = "значение"
// }

//  ************  ЦИКЛИ  ************ //
//  ************  while  ************ //

// let room = 10;
// const maxRoom = 20;

// while (room < maxRoom) {
//   room += 1;
// }
// console.log(room);

// let purchasedTickets = 95;
// const placesMax = 108;

// while (purchasedTickets < placesMax) {
//   purchasedTickets += 1;
//   console.log(purchasedTickets);
// }
// console.log('Заполнено:', purchasedTickets);

// //  ************  do...while  ************ //
// let login = '';

// do {
//   login = prompt('Введіть логін мінімум 2 символи', '');
// } while (login.length < 1);
// console.log('Ввели логін: ', login);

// let password = '';

// do {
//   password = prompt('Введіть пароль довший 4-х символів', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

//  ************  for  ************ //
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }

// console.log(sum);
// let x = 0;

// do {
//   x += 1;
//   console.log(x);
// } while (x < 10);

////////////////////////////////////////////
// //  ************  for  ************ //

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   if (i === 2) {
//     break;
//   }
// }

// console.log();

// const min = 100;
// const max = 200;

// let x;

// for (let i = 100; min < max; i += 10) {
//   x += 1;
//   console.log(x);
// }

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
//*
//*
//*
//**************************************************************************** */

//---------------------------- МАССИВЫ И ФУНКЦИИ-------------------------------//

//**************************************************************************** */
//*
//*
// //  ************  массив  ************ //
// const brand = ['apple', 'samsung', 'hp', 'asus', 'dell', 'lenovo'];
// const brandName = prompt('Введіть назву бренду').toLocaleUpperCase();
// let message;

// for (const currentBrand of brand) {
//   // console.log(currentBrand);
//   if (brandName === currentBrand.toLocaleUpperCase()) {
//     message = `${brandName} присутній в асортименті`;
//     break;
//   }
//   message = `${brandName} немає в асортименті`;
// }
// console.log(message);

// const carPartsList = ['KYB', 'Sachs', 'Monroe', 'Kony', 'Bilstaine'];
// const partsName = 'KYB';
// let message;

// for (const currentPartsName of carPartsList) {
//   if (currentPartsName === partsName) {
//     message = 'is available';
//     break;
//   }
//   message = 'not available';
// }
// console.log(message);

// // виведу числа менші за 10 (9 включно)
// const numbers = [1, 3, 14, 10, 18, 4, 7, 29, 6, 34, 9];
// // const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < 10) {
//     console.log(numbers[i]);
//   }
// }
// виведу числа більші за threshold
// const numbers = [1, 3, 14, 10, 18, 4, 7, 29, 6, 34, 9];
// const threshold = 10;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }
//   console.log(numbers[i]);
// }

// виведу числа менші за threshold
const numbers = [1, 3, 14, 10, 18, 4, 7, 29, 6, 34, 9];
const threshold = 10;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] >= threshold) {
    continue;
  }
  console.log(numbers[i]);
}
