const instruments = [
  {
    id: 1,
    img: 'https://static.dnipro-m.ua/cache/products/1754/catalog_origin_141546.jpg',
    name: 'Молоток',
    price: 150,
    descr:
      'Молоток з гумовою рукояткою, яка посилена скловолокном з м’яким гумовим покриттям. Маса:300 г',
  },
  {
    id: 2,
    img: 'https://static.dnipro-m.ua/cache/products/5098/catalog_origin_195568.jpg',
    name: 'Перфоратор',
    price: 3000,
    descr:
      'Конструкція перфоратора:Прямий. Сила удару:3,4 Дж. Рекомендований діаметр буріння, бур:6-16 мм',
  },
  {
    id: 3,
    img: 'https://static.dnipro-m.ua/cache/products/2023/catalog_origin_200763.jpg',
    name: 'Рівень',
    price: 2000,
    descr: 'Довжина:600 мм, точність:0,5 мм/м, з магнітом',
  },
];

const cardList = document.querySelector('.cards');
const cardMarkup = instruments.reduce(
  (acc, { id, img, name, price, descr }) => {
    acc += `<li class="card" data-id="#">
                <a class="card__link" href="">
                    <p class="card__name">${name}</p>
                    <img class="card_img" src="${img}" alt="${name}" width="250">
                    <p class="">${descr}</p>
                    <p class="card__price">${price}кредитів</p>
                    <p class="card__id">Код товара:${id}</p>
                    <button class="card__add-to-cart" type="button">КУПИТИ</button>
                    <button class="card__add-to-favorite" type="button">ЗАПАМЯТАТИ</button>
                </a>
            </li>`;
    return acc;
  },

  ''
);

cardList.insertAdjacentHTML('beforeend', cardMarkup);
