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
