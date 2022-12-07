// //............     querySelector       .....////////
// const siteNavRef = document.querySelector('.site__nav'); //находит первый элемент с классом который в аргументе, прекращает поиск, возвращает ссылку на обьект этого элемента.
// //если элемент не нашло возвращает null
// console.log(siteNavRef);
// // console.dir(siteNavRef);

// //............     querySelectorAll       .....////////

// const siteNavLinkRef = document.querySelectorAll('.site__link'); //находит все элементы из объекта document(или из объекта на котором вызывается),
// //с классом который передан в аргументе,
// //возвращает массив(коллекцию елементов) ссылок на найденные элементы. Если элементы не найдены возвращает пустой массив
// console.log(siteNavLinkRef);

// // поиск элементов в элементе

// const siteNavLinkInNavRef = siteNavRef.querySelectorAll('.site__link');
// console.log(siteNavLinkInNavRef);

//./img/pexels-allan-carvalho-12878426.jpg

// const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//   const mainImgRef = document.querySelector('.main__img');
//   mainImgRef.src = 'img/pexels-allan-carvalho-12878426.jpg';
//   mainImgRef.alt = 'Динамический альт';

//   const mainTitleRef = document.querySelector('.site__title');
//   console.log(mainImgRef.hasAttribute('width')); //проверяет, есть ли такой атрибут(есть ли в объекте элемента,
//   //свойство имя ключа которого совпадает с именем атрибута HTML тега элеиента), возвращает true / false
//   mainTitleRef.textContent = 'Природа';
// });

// const testInputRef = document.querySelector('.test');
// console.log(testInputRef.getAttribute('type')); // показывает значение свойства/////
// // element.setAttribute()   =  перезаписывает значение свойства
// //element.removeAttribute('src')   = удаляет атрибут из тега/по факту удаляет свойство из объекта
// testInputRef.removeAttribute('type');
// console.log(testInputRef);

// const actions = document.querySelectorAll('.js-action button');
// console.log(actions[2].dataset.action);

// const actionTest = document.querySelectorAll('.js-action button');

// console.log(actionTest[0].dataset.action);

// const magic = document.querySelector('.js-magic-btn');

// magic.addEventListener('click', () => {
//   const titleRef = document.querySelector('.site__title');
//   //   titleRef.classList.add('title-style'); // добавит клас
//   //   titleRef.classList.remove('title-style'); //удалит клас
//   //   titleRef.classList.replace('title-style', newclass); //заменяет старый клас(1-й арг) на новый (2-й арг)
//   //   titleRef.classList.contains('title-style'); // проверяет есть ли этот клас, возвращает true/false
//   titleRef.classList.toggle('current'); //если нету добавляет, если есть удаляет
// });

// const currentPageUrl = '/main';
// // const currentPageUrl = '/portfolio';
// // const currentPageUrl = '/about';
// const currentElRef = document.querySelector(`.site__link[href='${currentPageUrl}']`);
// currentElRef.classList.add('current');

// const navDOMMetodtestRef = document.querySelector('.site__list');
// console.log(navDOMMetodtestRef);
// console.log(navDOMMetodtestRef.parentNode); //вибере батька - site-nav
// console.log(navDOMMetodtestRef.childNodes); //вибере всі дочірні елементи(тест перед лі, лі, тест після лі і тд), поверне масив
// console.log(navDOMMetodtestRef.children); //вибере всі дочірній елементи лі, поверне масив
// console.log(navDOMMetodtestRef.firstChild); //вибере перший дочірній елемент(тест перед лі)
// console.log(navDOMMetodtestRef.firstElementChild); //вибере перший дочірній елемент лі
// console.log(navDOMMetodtestRef.lastChild); //вибере останній дочірній елемент(тест після лі)
// console.log(navDOMMetodtestRef.lastElementChild); //вибере останній дочірній елемент лі

// const navDOMMetodtestcontinueRef = document.querySelector('.site__item_center');
// console.log(navDOMMetodtestcontinueRef.previousSibling); // поверне сусіда зліва(текст зліва)
// console.log(navDOMMetodtestcontinueRef.previousElementSibling); // вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// // elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// // elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// const wrapMagicBTNRef = document.querySelector('.wrap__magic-BTN');

// const descrRef = document.createElement('p');
// descrRef.classList.add('site__descr');
// descrRef.textContent = 'MAGIC кнопка делает магию =)';

// wrapMagicBTNRef.appendChild(descrRef);

// const imgCrRef = document.createElement('img');
// imgCrRef.src = './img/pexels-allan-carvalho-12878426.jpg';
// imgCrRef.alt = 'Nature';
// imgCrRef.width = 480;

// console.log(imgCrRef);

// document.body.appendChild(imgCrRef);

// //

// const myCabItemRef = document.createElement('li');
// myCabItemRef.classList.add('site__item');

// const myCabLinkRef = document.createElement('a');
// myCabLinkRef.classList.add('site__link');
// myCabLinkRef.href = '/my-cabinet';
// myCabLinkRef.textContent = 'Личный кабинет';

// myCabItemRef.appendChild(myCabLinkRef);

// const portfolioLinkRef = document.querySelector('.site__item .site__link[href="/portfolio"]');
// console.log(portfolioLinkRef);
// // portfolioLinkRef.appendChild(myCabItemRef); //добавит после портфолио

//                                  -  или

// const ulRef = document.querySelector('.site__list');

// // ulRef.insertBefore(myCabItemRef, ulRef.firstElementChild); //добавит первым

// ulRef.insertBefore(myCabItemRef, ulRef.children[1]);

// //
// //
// //

// // добавление нескольких элементов подрад в одну операцию

// const heroRef = document.querySelector('.hero');

// const heroTitleRef = document.createElement('h2');
// heroTitleRef.classList.add('hero__title');
// heroTitleRef.textContent = 'Заголовок секции ГЕРОЙ';

// const imgHeroRef = document.createElement('img');
// imgHeroRef.src = './img/pexels-mariya-14594188.jpg';
// imgHeroRef.alt = 'Новогодние шарики';
// imgHeroRef.width = 600;

// heroRef.append(heroTitleRef, imgHeroRef); // append - перед //  prepend - после
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
// создаем колекцию. Создание разноцветных кнопок
// const options = [
//   { label: 'green', color: '#008000' },
//   { label: 'red', color: '#ff0000' },
//   { label: 'yellow', color: '#ffff00' },
//   { label: 'blue', color: '#0000ff' },
//   { label: 'grey', color: '#808080' },
//   { label: 'brown', color: '#a52a2a' },
// ];

// const btnColorsContainerRef = document.querySelector('.js-colors-btn');

// const makeColorsBTN = options => {
//   return options.map(option => {
//     const btnColorsRef = document.createElement('button');

//     btnColorsRef.style.backgroundColor = option.color;
//     btnColorsRef.type = 'button';
//     btnColorsRef.textContent = option.label;
//     btnColorsRef.classList.add('btn-colors');

//     return btnColorsRef;
//   });
// };

// const btnEL = makeColorsBTN(options);

// btnColorsContainerRef.append(...btnEL);

// document.addEventListener('keydown', handler);

// function handler(event) {
//   console.log(event.ctrlKey && event.code === 'KeyF');
// }

// const container = document.querySelector('.js-buttons');
// let selectedSAE = null;

// container.addEventListener('click', onClickBtn);

// function onClickBtn(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const activeBtn = document.querySelector('.active_btn');
//   const isActive = e.target.classList.contains('active_btn');

//   //   if (activeBtn) {
//   //     activeBtn.classList.remove('active_btn');
//   //   }  аналог ниже:
//   activeBtn?.classList.remove('active_btn');

//   e.target.classList.add('active_btn');

//   selectedSAE = e.target.dataset.value;

//   if (!isActive) {
//     alert(`Вы выбрали ${selectedSAE}`);
//   }

//   if (isActive) {
//     activeBtn.classList.remove('active_btn');
//   }
// }

// const container = document.querySelector('.js-buttons');
// let selectedSAE = new Set();

// container.addEventListener('click', onClickBtn);

// function onClickBtn(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const btn = e.target;
//   const isActive = btn.classList.contains('active_btn');
//   const btnValue = btn.dataset.value;

//   if (isActive) {
//     selectedSAE.delete(btnValue);
//   } else {
//     selectedSAE.add(btnValue);
//   }

//   btn.classList.toggle('active_btn');

//   console.log(selectedSAE);
// }
