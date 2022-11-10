<!-- Модуль 2. Заняття 4. Функції

Example 1 - Індекс маси тіла Напиши функцію calcBMI(weight, height) яка розраховує та повертає
індекс маси тіла. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

Індекс маси тіла необхідно округлити до однієї цифри після коми; -->

<!-- Example 2 - Найменше з чисел Напиши функцію min(a,b), яка повертає менше з чисел a та b.

js console.log(min(2, 5)); // 2 console.log(min(3, -1)); // -1 console.log(min(1, 1)); // 1

Example 3 - Площа прямокутника Напиши функцію getRectArea(dimensions) для обчислення площі
прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядки.
Значення гарантовано розділені пробілом.

``js function getRectArea(dimensions) {}

console.log(getRectArea('8 11')); `` -->

<!-- Example 4 - Логування елементів Напиши функцію logItems(items), яка отримує масив та використовує
цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення форматі <номер
елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 –
Mango, а для індексу 2 виведе 3 – Ajax.

``js function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']); logItems(['🍎', '🍇', '🍑', '🍌', '🍋']); `` -->

<!-- Example 5 - Логування контактів Напиши функцію printContactsInfo(names, phones) яка виводить у
консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен
та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на
відповідність. Кількість імен та телефонів гарантовано однакове.

``js function printContactsInfo(names, phones) {}

printContactsInfo( 'Jacob, William, Solomon, Artemis',
'89001234567,89001112233,890055566377,890055566300', ); `` -->

<!-- Example 6 - Пошук найбільшого елемента Напиши функцію findLargestNumber(numbers) яка шукає найбільше
число в масиві.

``js function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37]))); // 94 console.log(findLargestNumber([49, 4,
7, 83, 12]))); // 83 `` -->

<!-- Example 7 - Середнє значення Напишіть функцію calAverage() яка приймає довільну кількість аргументів
і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

``js function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5 console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2 `` -->

<!-- Example 8 - Форматування часу Напиши функцію formatTime(minutes) яка переведе значення minutes
(кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

``js const hours = Math.floor(totalMinutes / 60); const minutes = totalMinutes % 60;
console.log(hours); console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0); const doubleDigitMinutes =
String(minutes).padStart(2, 0); console.log(${doubleDigitHours}:${doubleDigitMinutes});

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10" console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01" `` -->

<!-- Example 9 - Колекція курсів (includes, indexOf, push і т.д.) Напишіть функції для роботи з колекцією
навчальних курсів courses:

addCourse(name) - додає курс до кінця колекції removeCourse(name) - видаляє курс з колекції
updateCourse(oldName, newName) - змінює ім'я на нове ``js const courses = ['HTML', 'CSS',
'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL',
'Express'] addCourse('CSS'); // 'У вас вже є такий курс'

removeCourse('React'); console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL',
'Express'] removeCourse('Vue'); // 'Курс з таким іменем не знайдено'

updateCourse('Express', 'NestJS'); console.log(courses); // ['HTML', 'CSS', 'JavaScript',
'PostgreSQL', 'NestJS'] `` -->

<!-- *

**
*
*
*
*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*
*готові
*
*
*
*
* -->

<!-- /**
 * Task 1 - Індекс маси тіла.
 * Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає
 * індекс маси тіла. Для цього необхідно розділити вагу в кілограмах на
 * квадрат висоти людини в метрах.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми
 */

// 1) Запитати ввести вагу і зріс - prompt
// 2) створити пусту функцію розрахунку індексу маси - function
// 3) задати функції параметри ваги і зросту - (weight, height)
// 4) розрахувати індекс маси. - Math.pow()
// 5) повернути результат - return
// 6) округлити результат до одніє цифри після коми toFixed(1)

const weight = prompt('Введіть вашу вагу в кг');
const height = prompt('Введіть ваш зріст в метрах');

const calcBMI = function(weightU, heightU) {
  const heightPow = Math.pow(heightU, 2);
  const result = weightU / heightPow;

  return result.toFixed(1)
}

/**
 * Створили окрему функцію яка на основі порахованого індекса маси тіла,
 * виводе в консоль, є надмірна вага чи нема
 * */
const validateBMI = function (bmi) {
  if (bmi <= 18.5) {
    console.log('недостатня маса')
  } else if (bmi <= 24.9) {
    console.log('норма')
  } else {
    console.log('надлишкова маса')
  }
}


const result = calcBMI(weight, height);
console.log(result);

validateBMI(result)


// console.log(calcBMI(80, 1.75))
// console.log(calcBMI(70, 1.85))
// console.log(calcBMI(100, 1.55))
// console.log(calcBMI(90, 1.8))


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

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

/** Щоб додати інтерактивности, запитуємо користувача ввести дані - prompt */
const courseName = prompt('Введіть назву курсу');
const newName = prompt('Введіть нове імʼя');

const addCourse = function(newCourse) {

  if (courses.includes(newCourse)) {
    console.log('Такий курс вже є');
    return // ранній вихід із функції
  }

  courses.push(newCourse);
  return courses; // Памʼятайте, що змінна courses це посилання на масив!
}

const removeCourse = function (courseName) {

  const index = courses.indexOf(courseName);

  if (index === -1) {
    console.log('такого курсу нема')
    return
  }

  const deletedCourses = courses.splice(index, 1);
  return deletedCourses
}

const updateCourse = function (oldName, newName) {
  const index = courses.indexOf(oldName);

  if (index === -1) {
    console.log('такого курсу нема')
    return
  }

  courses[index] = newName
}


/** checkCourseName - функція в яку ми винесли перевірку елемнту в масиві. */
const checkCourseName = function (value) {
  const index = courses.indexOf(value);

  if (index === -1) {
    console.log('такого курсу нема')
    return false
  } else {
    console.log('Такий курс вже є');
    return true
  }
}


/** Дублюю ті самі функції, але тепер з викристанням винесеної перевірки в окрему функцію */
// const addCourse = function(newCourse) {

//   if (checkCourseName(newCourse)) return

//   courses.push(newCourse);
//   return courses;
// }

// const removeCourse = function (courseName) {

//   if (!checkCourseName(courseName)) return

//   const deletedCourses = courses.splice(index, 1);
//   return deletedCourses
// }

// const updateCourse = function (oldName, newName) {
//   if (!checkCourseName(oldName)) return
//   courses[index] = newName
// } -->
