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

// Example 5 - Шаблонные строки Составь фразу с помощью шаблонных строк A has B bots in stock, где A,
// B - переменные вставленные в строку.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

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

// Example 10 - Опертор % и методы строк Напиши скрипт который переведёт значение
// totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10 450 покажет 07:30 1441 покажет 24:01 const totalMinutes = 70;
