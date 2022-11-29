//............     querySelector       .....////////
const siteNavRef = document.querySelector('.site__nav'); //находит первый элемент с классом который в аргументе, прекращает поиск, возвращает ссылку на обьект этого элемента.
//если элемент не нашло возвращает null
console.log(siteNavRef);
// console.dir(siteNavRef);

//............     querySelectorAll       .....////////

const siteNavLinkRef = document.querySelectorAll('.site__link'); //находит все элементы из объекта document(или из объекта на котором вызывается),
//с классом который передан в аргументе,
//возвращает массив(коллекцию елементов) ссылок на найденные элементы. Если элементы не найдены возвращает пустой массив
console.log(siteNavLinkRef);

// поиск элементов в элементе

const siteNavLinkInNavRef = siteNavRef.querySelectorAll('.site__link');
console.log(siteNavLinkInNavRef);
