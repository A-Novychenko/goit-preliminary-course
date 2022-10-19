// Модуль 1. Занятие 1. Переменные, типы и операторы

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

const value = 5.5;
let res1 = Math.floor(value);
// 5;
let res2 = Math.ceil(value);
// 6;
let res3 = Math.round(value);
// 6;

console.log(value);
console.log(res1);
console.log(res2);
console.log(res3);

let width = '50.5px';
const width1 = Number(width);
const width2 = Number.parseInt(width);
const width3 = Number.parseFloat(width);
console.log(width);
console.log(typeof width);
console.log(width1);
console.log(typeof width1);
console.log(width2);
console.log(typeof width2);
console.log(width3);
console.log(typeof width3);

const result = Number.isNaN(width2);
console.log(result);
