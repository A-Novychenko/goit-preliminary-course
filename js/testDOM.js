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

const navDOMMetodtestRef = document.querySelector();
