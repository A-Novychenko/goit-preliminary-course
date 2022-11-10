                  ПЕРЕМЕННЫЕ, ВВОД/ВЫВОД                   //

let x;

x = 500;
console.log(x);
x = typeof x;

console.log(x);
console.log(typeof x);

const a = x + 'wwww';
console.log(a);
// alert(a);
let date = 21;
alert('Сьогодні ' + date + ' жовтня');
date += 1;
alert(`Завтра ${date} жовтня`);

let bgc;

bgc = confirm('Я перефарбую фон у зелений?');
if (bgc === true) {
  document.body.style.backgroundColor = 'green';
}

let userInput;
userInput = Number.parseInt(prompt('Сколько Вам лет?'));
console.log(userInput);
console.log(typeof userInput);

if (userInput >= 18) {
  document.body.style.backgroundColor = 'green';
} else {
  document.body.style.backgroundColor = 'red';
}

                  ОСНОВНІ ОПЕРАТОРИ                    //
                  математичні оператори                    //
let result;
const a = 1;
const b = 2;
const c = 3;
const d = 10;
const e = 100;
const f = 100;
const h = 100;

result = a + b - (((c * d) / e) * f) / h;

console.log(result);

const x = 22;
const y = 4;

// Додавання
console.log(x + y); // 15

// Віднімання
console.log(x - y); // 5

// Множення
console.log(x * y); // 50

// Ділення
console.log(x / y); // 2

// Остача від ділення
console.log(x % y); // 0

// Додавання із заміною (також є для всіх інших операторів)
let value = 5;

// Аналогічно запису value = value + 10;
value += 10;
console.log(value); // 15

                  оператори порівняння                    //
const a = NaN;
const b = '10px';
let res1;
let res2;
// let num = isNaN(Number(NaN));
// let num2 = isNaN(Number('10px'));
let num = Number.isNaN(NaN);
let num2 = Number.isNaN(Number('10px'));
console.log(num);
console.log(num2);
// let res1 = a > b;
// res1 = a < b;
res1 = a == b;
res2 = num !== num2;

// alert(res1);

alert(res2);
// console.log(typeof res1);

const a = false;
const b = 0;

console.log(a === b);

                  ЧИСЛА                    //

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
              додавання дробових чисел         //

*100 дадати і поділити на 100

const a = 0.1;
const b = 0.2;

const result = (a * 100 + b * 100) / 100;

console.log(result);
console.log(result === 0.3);

додати а результат скоротити

const a = 0.1;
const b = 0.2;

const result = Number((a + b).toFixed(1));

console.log(result);
console.log(result === 0.3);

                     КЛАС Math                    //
let a = 1.9;

a = Math.floor(a);
// 1--- повертає число до крапки(найменше ціле)

a = 1.2;
a = Math.ceil(a);
// 2--- повертає найближче більше ціле (якщо а = 2.1 або 2,8  то поверне 3)

a = 1.5;
a= Math
console.log(a);

console.log(Math.min(10, 20, 30, 100, 50));
console.log(Math.max(10, 20, 30, 100, 50));

               РЯДКИ                   //
      Конкатенація - додавання(зшивання рядків)         //
const a = 2;
const b = 5;
const c = '10';

let res;

res = a + b + c;
console.log(res);

const d = 'Mango';
const e = 'Apple';
// Звичайний рядок з підстановкою змінних. Фрукти
res = 'фрукт 1: ' + d + ', фрукт 2: ' + e + '.';
console.log(res);
// Шаблонний рядок
res = `фрукт 1: ${d}, фрукт 2: ${e}.`;
console.log(res);
//
       Влстивості рядків

const massage = 'Hello !';
console.log(massage.length);
console.log('                            '.length);

const textSmall = 'ЦЕЙ ТЕКСТ ПОВИНЕН БУТИ В НИЖНЬОМУ РЕГІСТРІ';
const textBig = 'цей текст повинен бути в верхньому регістрі';
let s = textSmall.toLowerCase();
let b = textBig.toUpperCase();
console.log(s);
console.log(b);

const massageSmall = 'ПОВІДОМЛЕННЯ В НИЖНЬОМУ РЕГІСТРІ';
const massageBig = 'повідомлення в верхньому регістрі';
let mS = massageSmall.toLowerCase();
let mB = massageBig.toUpperCase();
console.log(mS);
console.log(mB);

const brand = 'DELL';
const userInput = prompt('Вкажіть марку монітора').toUpperCase();

if (brand === userInput) {
  alert('GOOD!');
} else {
  alert('EROR');
}

const testIndex = 'Test';

const index = testIndex.indexOf('et');
console.log(index);

const testIncludes = 'Перевіряє, чи міститься підрядок в рядку';

const includes = testIncludes.includes('чи міс');
console.log(includes);
const endsWith = testIncludes.endsWith('дку');
console.log(endsWith);

const replace = testIncludes.replace('е', 'е.');
console.log(replace);
const replaceAll = testIncludes.replaceAll('е', 'е.');
console.log(replaceAll);

let phrase = 'My last name Novichenko';
console.log(phrase);
console.log(phrase.indexOf('N'));
console.log(phrase.indexOf('c'));

let pseudonym = phrase.slice(13, 17 + 1);
pseudonym = pseudonym.replace('c', 'k');
console.log(pseudonym);

phrase = phrase.replace('last name Novichenko', 'pseudonym Novik');
console.log(phrase);


                ЛОГІЧНІ ОПЕРАТОРИ                   //
                 Логічне І   &&                 //
console.log(1 && 5); // 5
console.log(5 && 1); // 1
console.log(0 && 2); // 0
console.log(2 && 0); // 0
console.log('' && 'Mango'); // ""
console.log('Mango' && ''); // ""
console.log('Mango' && 'Poly'); // 'Poly'
console.log('Poly' && 'Mango'); // "Mango"

//                  Логічне АБО   ||              //

console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

console.log(3 || false); // 3
console.log(false || 3); // 3
console.log(3 || true); // 3
console.log(true || 3); // true

//                  Логічне НЕ  !              //

console.log(!true); // false
console.log(!false); // true
console.log(!3); // false
console.log(!'Mango'); // false
console.log(!0); // true
console.log(!''); // true

const isOnline = true;
const isNotOnline = !isOnline; // false


               ВЕТВЛЕНИЯ                   //

************  if  ************ //

let result = 0;
const number = '5';

if (number == 5) {
  result = 100;
}

console.log(result);

************  if...else  ************ //

let ifElse = 0;
const x = 'dell';

if (x === 'dell dc2421c') {
  ifElse = 'if';
} else {
  ifElse = 'else';
}
console.log(ifElse);

let dayNumber;
const dayName = 'thursday';
const dayName2 = 'monday';

if (dayName === 'thursday') {
  dayNumber = 4;
} else {
  dayNumber = 'day-x';
}
console.log(dayNumber);

if (dayName2 === 'thursday') {
  dayNumber = 4;
} else {
  dayNumber = 'day-x';
}
console.log(dayNumber);

************  else...if  ************ //

let message;
const color = 'red';
const color = 'green';
const color = 'yellow';
const color = 'blue';

if (color === 'green') {
  message = 'Все добре';
} else if (color === 'yellow') {
  message = 'Попередження';
} else if (color === 'red') {
  message = 'УВАГА !';
} else {
  message = 'невірне значення';
}
console.log(message);

 ************  тернарний оператор  ************ //
Замінює if...else

let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

console.log(type); // "adult"

const type1 = age >= 18 ? 'adult' : 'child';

console.log('результат тернарного оператора:', type1);

const chargedLevel = 30;
const charged = chargedLevel >= 30 ? 'нужно зарядить' : 'достаточно заряжен';
console.log(charged);

const numberInput = 9;
const number =
  numberInput >= 10 ? `${numberInput} двухзначное число` : `${numberInput} однозначное число`;
console.log(number);

const day = 'понедельник';
const currentDay =
  day === 'понедельник' || 'вторник' || 'среда' || 'четверг' || 'пятница'
    ? 'рабочий день'
    : 'выходной';
console.log(currentDay);

 ************  Інструкція switch  ************ //
switch#1
let day;

const dayInput = prompt('ВВЕДИТЕ ЧИСЛО ОТ 1 ДО 7');
const numberCurrentDay = Number(dayInput);

switch (numberCurrentDay) {
  case 1:
    day = 'понедельник';
    break;
  case 2:
    day = 'вторник';
    break;
  case 3:
    day = 'среда';
    break;
  case 4:
    day = 'четверг';
    break;
  case 5:
    day = 'пятница';
    break;
  case 6:
    day = 'суббота';
    break;
  default:
    day = 'воскресенье';
}
console.log(day);

switch#2
const color = 'red';
let massage;

switch (color) {
  case 'yellow':
    massage = 'проверьте, возможно есть ошибка';
    break;
  case 'green':
    massage = 'правильно';
    break;
  case 'red':
    massage = 'внимание';
    break;
  default:
    massage = 'не верный ввод';
}
console.log(massage);

 конструкция switch

switch (условие - (имя переменной)переменная которая будет сравниваться) {
    case значение: -  значение которое будет сравниватьс я(обьязательно строгое равенство ===) с условием switch
    x = "значение" - значение которое присвоится переменной х в случае если case вернет true
    break - передает выполнение кода после switch

    если case вернул false то выполнение кода переходит к следующему case.Если все case вернули false то выполнение переходит к default.
        default:
             x = "значение"
}

 ************  ЦИКЛИ  ************ //
 ************  while  ************ //

let room = 10;
const maxRoom = 20;

while (room < maxRoom) {
  room += 1;
}
console.log(room);

let purchasedTickets = 95;
const placesMax = 108;

while (purchasedTickets < placesMax) {
  purchasedTickets += 1;
  console.log(purchasedTickets);
}
console.log('Заполнено:', purchasedTickets);

//  ************  do...while  ************ //
let login = '';

do {
  login = prompt('Введіть логін мінімум 2 символи', '');
} while (login.length < 1);
console.log('Ввели логін: ', login);

let password = '';

do {
  password = prompt('Введіть пароль довший 4-х символів', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);

 ************  for  ************ //
const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
    sum += i;
}

console.log(sum);
let x = 0;

do {
  x += 1;
  console.log(x);
} while (x < 10);

//////////////////////////////////////////
//  ************  for  ************ //

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  if (i === 2) {
    break;
  }
}

console.log();

const min = 100;
const max = 200;

let x;

for (let i = 100; min < max; i += 10) {
  x += 1;
  console.log(x);
}

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
*
*
*
**************************************************************************** */

---------------------------- МАССИВЫ И ФУНКЦИИ-------------------------------//

**************************************************************************** */
*
*
//  ************  массив  ************ //
const brand = ['apple', 'samsung', 'hp', 'asus', 'dell', 'lenovo'];
const brandName = prompt('Введіть назву бренду').toLocaleUpperCase();
let message;

for (const currentBrand of brand) {
  // console.log(currentBrand);
  if (brandName === currentBrand.toLocaleUpperCase()) {
    message = `${brandName} присутній в асортименті`;
    break;
  }
  message = `${brandName} немає в асортименті`;
}
console.log(message);

const carPartsList = ['KYB', 'Sachs', 'Monroe', 'Kony', 'Bilstaine'];
const partsName = 'KYB';
let message;

for (const currentPartsName of carPartsList) {
  if (currentPartsName === partsName) {
    message = 'is available';
    break;
  }
  message = 'not available';
}
console.log(message);

// виведу числа менші за 10 (9 включно)
const numbers = [1, 3, 14, 10, 18, 4, 7, 29, 6, 34, 9];
// const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < 10) {
    console.log(numbers[i]);
  }
}
виведу числа більші за threshold
const numbers = [1, 3, 14, 10, 18, 4, 7, 29, 6, 34, 9];
const threshold = 10;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(numbers[i]);
}

виведу числа менші за threshold
const numbers = [1, 3, 14, 10, 18, 4, 7, 29, 6, 34, 9];
const threshold = 10;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] >= threshold) {
    continue;
  }
  console.log(numbers[i]);
}

  ПРИСВОЮВАННЯ ЗА ЗНАЧЕННЯМ /

let a = 10;
const b = a;
console.log(a);
console.log(b);

a = 25;
console.log(a);
console.log(b);

let a = [10];
const b = a;
console.log(a);
console.log(b);

a[0] = 25;
console.log(a);
console.log(b);

 МЕТОД SPLIT i JOIN   //

const brand = 'samsung';

const brandLetter = brand.split('');
console.log(brandLetter);

const brandWord = brandLetter.join('');
console.log(brandWord);

const phrase =
  'Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.';

const phraseWord = phrase.split(' ');
console.log(phraseWord);

const phraseSentence = phraseWord.join(' ');
console.log(phraseSentence);

////////////*************---------------------*******************------------------*** */
let a = 50;
let b = a;
console.log(a); // 5
console.log(b);

a = 20;
console.log(a);
console.log(b);

const m = [5];
const p = m;
console.log(m);
console.log(p);

m[0] = 25;
m.push(30);
console.log(m);
console.log(p);

p.push(35);
console.log(m);
console.log(p);

const text = "Метод масивів join(delimiter) об'єднує елементи масиву у рядок.";
const mas = text.split(" ");
console.log(mas);

const brand = "samsung";
let brandLater = brand.split("");
console.log(brandLater);
let brandWord = brandLater.join();
console.log(brandWord);

let textNew = mas.join(" ");
console.log(textNew);

const indexM = brandLater.indexOf("m");
console.log(indexM);

const test = ["test", "test2", "test3", "test4", "test5"];
const indexTest = test.indexOf("test3");
console.log(indexTest);
console.log(test.indexOf("test7"));
console.log(test.includes("test5"));
console.log(test.includes("test10"));

const cityUkraineList = ["Kyiv", "Kharkiv", "Zhytomyr", "Vinnytsia", "Poltava"];
const cityList = ["London", "Kyiv", "Praha"];
console.log("This is Ukrainians city?");

for (const currentCity of cityList) {
  if (cityUkraineList.includes(currentCity)) {
    console.log(currentCity);
    console.log("YES");
    console.log("");
  } else {
    console.log(currentCity);
    console.log("NO");
    console.log("");
  }
}

const cityUkraineList = ["Kyiv", "Kharkiv", "Zhytomyr", "Vinnytsia", "Poltava"];
const push1 = cityUkraineList.push("Odessa");
const unshift1 = cityUkraineList.unshift("Chernigiv");
console.log(cityUkraineList);
console.log(push1);
console.log(unshift1);
const pop1 = cityUkraineList.pop();
const shift1 = cityUkraineList.shift();

console.log(cityUkraineList);
console.log(pop1);
console.log(shift1);

const cityUkraineList = [
  "Kyiv",
  "Kharkiv",
  "Zhytomyr",
  "Vinnytsia",
  "Poltava",
  "London",
  "Praha",
];

const sliceTest = cityUkraineList.slice(-2, 6);
console.log(cityUkraineList);
console.log(sliceTest);

const cityUkraineList = [
  "Kyiv",
  "Kharkiv",
  "Zhytomyr",
  "Vinnytsia",
  "Poltava",
  "London",
  "Praha",
];
const spliceTest = cityUkraineList.splice(5, 2);
console.log(cityUkraineList);
console.log(spliceTest);
cityUkraineList.splice(1, 0, "Chernigiv");
const splice2 = cityUkraineList.splice(3, 0, "Odessa", "Dnipro", "Lviv");
console.log(cityUkraineList);
console.log(splice2);
cityUkraineList.splice(1, 8, "London", "Praga", "Sofiya");
console.log(cityUkraineList);

const color = ["red", "blue", "green"];
const newColor = ["tomato", "teal"];
const allColor = color.concat(newColor);
const reversColor = newColor.concat(color);
console.log(color);
console.log(newColor);
console.log(allColor);
console.log(reversColor);

let a = '0' == false;
console.log(a);

const nambers = [
  4, 65, 87, 21, 45, 8, 35, 73, 54, 35, 56, 97, 35, 86, 34, 64, 31, 4, 53, 35, 45, 3, 43, 54,
];
let maxNumber = nambers[0];

for (const number of nambers) {
  if (number > maxNumber) {
    maxNumber = number;
  }
}
console.log(maxNumber);

const title = 'Top 10 benefits of React framework';

const url = title.toLowerCase().split(' ').join('-');
console.log(url);

const titleNormalise = title.toLowerCase();
const url = titleNormalise.split(' ').join('-');
console.log(url);

const device = 'phone';
const brand = 'apple';

const deviceList = {
  [device]: brand,
};

console.log(deviceList);

deviceList.laptop = 'hp'; //добавление
deviceList.laptop = 'dell'; //переопределение

function includes(array, value) {
  // Change code below this line
  let isThere;
  for (const arrayElement of array) {
    isThere = arrayElement === value ? true : false;
    console.log(arrayElement);
    console.log(value);
    console.log('----------------------------');
  }

  return isThere;
  // Change code above this line
}

console.log(includes([1, 2, 3, 4, 5], 3));

console.log(deviceList);

const x = { a: 10, b: 20 };
const y = { a: 10, b: 20 };
const z = x;

console.log(x === y, x === z);

z.c = 30;
console.log(x);

function add(...args) {
  console.log(args);

  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

const result = add(1, 2, 3, 4, 5);
console.log(result);

const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  // getPotions() {
  //   return this.potions;
  // },
  // addPotion(newPotion) {
  //   for (const potion of this.potions) {
  //     if (potion.name.includes(newPotion.name)) {
  //       return `Error! Potion ${newPotion} is already in your inventory!`;
  //     }
  //   }

  //   this.potions.push(newPotion);
  // },
  removePotion(potionName) {
    let potionIndex = 0;
    // for (const potion of this.potions) {
    // potionIndex = potion.name.indexOf(potionName.name);
    // }

    for (let i = 0; i < this.potions.length; i += 1) {
      console.log(this.potions[i].name);
      console.log(potionName);
      // console.log(this.potions[i].name.indexOf(potionName));

      if (potionName === this.potions[i].name) {
        potionIndex = i;
        console.log(i);
      } else {
        return `Potion ${potionName} is not in inventory!`;
      }
    }
    // if (potionIndex === -1) {
    //   return `Potion ${potionName} is not in inventory!`;
    // }

    this.potions.splice(potionIndex, 1);
  },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line
};

atTheOldToad.removePotion('Dragon breath');
console.log(atTheOldToad);

const test = 'welcome';
const massive = test.split('');
console.log(massive);
const string = massive.join('');
console.log(string);

const index = massive.indexOf('e');
console.log(index);

const num = [1, 2, 3];
const lengthNum = num.push(4, 5, 6, 7);
console.log(num);
console.log(lengthNum);

const y = num.pop();
console.log(num);
console.log(y);

console.log('-----------------------------------------------------');

const u = num.unshift(100);
console.log(u);
console.log(num);

const s = num.shift();
console.log(s);
console.log(num);

const word = ['w', 'e', 'l', 'c', 'o', 'm', 'e'];

const newWord = word.slice(3, 6);
console.log(word);
console.log(newWord);

const word = ['w', 'e', 'l', 'c', 'o', 'm', 'e'];
const newWord = word.splice(3, 3);
console.log(word);
console.log(newWord);

const updateWord = word.splice(3, 0, 'c', 'o', 'm');
// console.log('-----------------------------------------------------');
console.log(word);
console.log(updateWord);

const languages = ['C', 'C++', 'Java', 'JavaScript'];
const change = languages.splice(0, 3, 'htmm', 'css');
console.log(languages);
console.log(change);
console.log(languages.concat(change));

function funcTest(x = 0, y = 1, z = 2) {
  //   console.log('good!');
  return x + y + z;
}
console.log(funcTest(1, 2));

function calc() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  return total;
}

console.log(calc(1, 1, 1, 1, 1, 1, 1, 1));
console.log(calc(1, 2, 3));
console.log(calc(0, 5, 5));

const sumsUp = function (...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

const f = sumsUp(1, 5, 84, 98646, 54, 6, 5, 1, 64, 54, 51656, 0);
const s = sumsUp(1, 1, 1, 1, 1, 1, 1);

console.log(f);
console.log(s);
console.log(sumsUp);

******************************************************************************************************** */
      SEARCH        //
******************************************************************************************************** */
Variant 1

const countrys = ['ukraine', 'germany', 'china', 'france', 'italy'];

const currentCountry = 'ukraine';

const validateCounry = function (currentCountry, countrys) {
  for (const country of countrys) {
    if (country === currentCountry) {
      return `${currentCountry} есть в списке`;
    }
  }
  return `${currentCountry} отсутствует в списке`;
};

const countryValid = validateCounry(currentCountry, countrys);
console.log(countryValid);
************************* */
      variant 2        //
*********************** */

const countrys = ['ukraine', 'germany', 'china', 'france', 'italy'];

const currentCountry = 'ukraine';

const validateCounry = function (currentCountry, countrys) {
  return countrys.includes(currentCountry)
    ? `${currentCountry} есть в списке`
    : `${currentCountry} отсутствует в списке`;
};

const countryValid = validateCounry(currentCountry, countrys);
console.log(countryValid);
******************************************************************************************************** */
      /SEARCH        //
******************************************************************************************************** */
const inputName = 'changeOilPeriod';
const inputValue = 10000;
const inputNameColor = 'color';
const inputValueColor = 'silver';
const email = 'NovychenkoA@outlook.com';
const login = 'NovychenkoA';
const password = 'Sd151515';
const inputDate = 'registrationDate';

const myCar = {
  registration: {
    email,
    login,
    password,
  },
  [inputDate]: 2008,
  carName: {
    brand: 'chevrolet',
    model: 'aveo',
    type: 'sedan',
  },
  year: 2008,
  startMileage: 128954,
  currentMileage: 226123,

  myYearsOfOperation: [2017, 2018, 2019, 2020, 2021, 2022],
  sumMyYearsOfOperation(years) {
    return years[years.length - 1] - years[0];
  },
  myMileage(start, current) {
    return current - start;
  },
  averageMileage() {
    const averageMile =
      this.myMileage(this.startMileage, this.currentMileage) /
      this.sumMyYearsOfOperation(this.myYearsOfOperation);
    return console.log(`Средний пробег за год ${averageMile} км`);
  },
};

myCar.modelType = 'T250';
myCar.engine = 1.6;
myCar[inputName] = inputValue;
myCar['color'] = 'red';
myCar[inputNameColor] = inputValueColor;
myCar.myYearsOfOperation.unshift(2008, '...');
myCar.myYearsOfOperation.shift(1);
myCar.myYearsOfOperation.shift(0);

myCar.averageMileage(myCar.myYearsOfOperation);

console.log(myCar);
console.log(myCar.carName.brand);
console.log(myCar.myYearsOfOperation[myCar.myYearsOfOperation.length - 1]);
console.log(myCar['year']);
console.log(myCar.registration);

console.log(myCar);

for (const key in myCar) {
  //   console.log(key);
  //   console.log(myCar[key]);
  console.log(`${key} === ${myCar[key]}`);
}
********996-1045 */