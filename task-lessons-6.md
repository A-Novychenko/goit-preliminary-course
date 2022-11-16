<!-- Модуль 3 Заняття 6. Деструктуризація та rest/spread
//-----------------------------------------------------------------------------------------
//Example 1
//
// - Деструктуризація Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
незалежних аргументів.

function calcBMI(weight, height) { const numericWeight = Number(weight.replace(',', '.')); const
numericHeight = Number(height.replace(',', '.')); return Number((numericWeight / numericHeight \*\*
2).toFixed(1)); }

// Було // console.log(calcBMI('88,3', '1.75')); // console.log(calcBMI('68,3', '1.65')); //
console.log(calcBMI('118,3', '1.95'));

// Очікується console.log( calcBMI({ weight: '88,3', height: '1.75', }), ); console.log( calcBMI({
weight: '68,3', height: '1.65', }), ); console.log( calcBMI({ weight: '118,3', height: '1.95', }),
);

//-----------------------------------------------------------------------------------------
//Example 2 //

- Деструктуризація Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
  незалежних аргументів.

function printContactsInfo(names, phones) { const nameList = names.split(','); const phoneList =
phones.split(','); for (let i = 0; i < nameList.length; i += 1) {
console.log(`${nameList[i]}: ${phoneList[i]}`); } }

// Було // printContactsInfo( // 'Jacob,William,Solomon,Artemis', //
'89001234567,89001112233,890055566377,890055566300', // );

// Очікується printContactsInfo({ names: 'Jacob,William,Solomon,Artemis', phones:
'89001234567,89001112233,890055566377,890055566300', });

//-----------------------------------------------------------------------------------------
//Example3
//-----------------------------------------------------------------------------------------

- Глибока деструктуризація Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість
  набору незалежних аргументів.

function getBotReport(companyName, repairBots, defenceBots) { return
`${companyName} has ${repairBots + defenceBots} bots in stock`; }

// Було // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується console.log( getBotReport({ companyName: 'Cyberdyne Systems', bots: { repair: 150,
defence: 50, }, }), ); // "Cyberdyne Systems has 200 bots in stock" //
//-----------------------------------------------------------------------------------------
//Example 4 - Деструктуризація // Напиши функцію так, щоб вона приймала об'єкт параметрів із
властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої
компанії.

// Рішення function getStockReport(companyName, stock) { // your code here }

// Перевірка console.log( getStockReport({ companyName: 'Cyberdyne Systems', stock: { repairBots:
150, defenceBots: 50, }, }), ); // "Cyberdyne Systems has 200 items in stock"

console.log( getStockReport({ companyName: 'Belacci', stock: { shoes: 20, skirts: 10, hats: 5, },
}), ); // "Belacci has 35 item in stock"

// //----------------------------------------------------------------------------------------- // //
Example 5 - // Операція spread Напиши функцію createContact(contact) так, щоб вона повертала новий
об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в
contact немає такої властивості.

// Рішення function createContact() { // your code here }

console.log( createContact({ name: 'Mango', email: 'mango@mail.com', list: 'friends', }), );
console.log( createContact({ name: 'Poly', email: 'poly@hotmail.com', }), );

function generateId() { return '\_' + Math.random().toString().substring(2, 9); } // /// //
//----------------------------------------------------------------------------------------- //
Example 6 //

- Операція rest Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із
  властивістю fullName, замість firstName та lastName.

// Рішення function transformUsername() { // your code }

console.log( transformId({ id: 1, firstName: 'Jacob', lastName: 'Mercer', email:
'j.mercer@mail.com', friendCount: 40, }), );

console.log( transformId({ id: 2, firstName: 'Adrian', lastName: 'Cross', email:
'a.cross@hotmail.com', friendCount: 20, }), );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/\*\*

- 1.  Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
- незалежних аргументів. \*/

function calcBMI({weight, height}) {

const numericWeight = Number(weight.replace(',', '.')); const numericHeight =
Number(height.replace(',', '.'));

return Number((numericWeight / numericHeight \*\* 2).toFixed(1)); }

console.log( calcBMI({ weight: '88,3', height: '1.75', }), ); console.log( calcBMI({ weight: '68,3',
height: '1.65', }), ); console.log( calcBMI({ weight: '118,3', height: '1.95', }), );

/\*\*

- 2.
- Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
- незалежних аргументів. \*/

function printContactsInfo({names, phones}) { const nameList = names.split(','); const phoneList =
phones.split(',');

for (let i = 0; i < nameList.length; i += 1) { console.log(`${nameList[i]}: ${phoneList[i]}`); } }

printContactsInfo({ names: 'Jacob,William,Solomon,Artemis', phones:
'89001234567,89001112233,890055566377,890055566300', });

/\*\*

- 3.  Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних
      аргументів. \*/

function getBotReport(object) {

console.log(object)

const {companyName, bots} = object console.log(companyName); console.log(bots);

const { repair: repairBots = 56, defence: defenceBots = 45 } = bots;

console.log(repairBots) console.log(defenceBots)

return `${companyName} has ${repairBots + defenceBots} bots in stock`; }

const company = { companyName: 'Cyberdyne Systems', bots: { repair: 150, defence: 50, }, }

getBotReport(company)

/\*\*

- 4.
- Напиши функцію так, щоб вона приймала об'єкт параметрів із
- властивостями `companyName` та `stock` та
- виводила репорт про кількість товарів на складі будь-якої компанії.
-
- Extended: Переписали так щоб функція прймала масив з обʼєктами \*/

const companies = [ { companyName: 'Cyberdyne Systems', stock: { repairBots: 150, defenceBots: 50,
}, }, { companyName: 'Belacci', stock: { shoes: 20, skirts: 10, hats: 5, }, } ]

function getStockReport(companies) {

for (let {companyName, stock} of companies) {

    let total = 0;
    for (let value of Object.values(stock)) {
      total += value
    }

    console.log(`${companyName} has ${total} items in stock`)

} // return `${companyName} has ${total} items in stock`

}

getStockReport(companies)

/\*\*

- Task 5
- Напиши функцію `createContact(contact)` так, щоб вона повертала новий
- об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
- значенням "default" якщо в `contact` немає такої властивості. \*/

const createContact = function(contact) { // 1. Створити новий обʼєкт // 2. Додати до нього нові
ключі // id // createdAt // list, якщо його нема, то дати дефолтне значення return { list:
'default', ...contact, id: 1 } }

const contact = { name: 'Mango', email: 'mango@mail.com', list: 'friends', }

const newContact = createContact(contact); newContact.name = "Ser. Pan";

console.log(newContact) console.log(contact)

/\*\*

- 6.
- Напиши функцію `transformUsername(user)` так,
- щоб вона повертала новий об'єкт із властивістю
- `fullName`, замість `firstName` та `lastName`. \*/

const transformUsername = function ({firstName, lastName, ...restProps}) {

return { fullName: `${firstName} ${lastName}`, ...restProps } }

const user = { id: 1, firstName: 'Jacob', lastName: 'Mercer', email: 'j.mercer@mail.com',
friendCount: 40, }

const newUser = transformUsername(user); console.log(newUser)

const userP = { email: "mango@mail.com", age: 20 };

const { email: userEmail } = userP;

console.log(email) // Помилка, бо змінної email нема -->
