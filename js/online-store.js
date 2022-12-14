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

///////       DATA      //////////
const dataCart = [];
const dataFavorit = [];

///////       /DATA      //////////

const cart = document.querySelector('.js-cart');
const favorit = document.querySelector('.js-favorit');
const cartList = document.querySelector('.js-cart-list');
const cardList = document.querySelector('.cards');
const cardMarkup = instruments.reduce(
  (acc, { id, img, name, price, descr }) => {
    acc += `<li class="card js-product" data-product-id="${id}">
                <a class="card__link js-cardLink" href="./online-store-card.html">
                    <h2 class="card__name js-cardLink">${name}</h2>
                    <img class="card_img js-cardLink" src="${img}" alt="${name}" width="250">
                    <p class="card__descr js-cardLink">${descr}</p>
                    <p class="card__id js-cardLink">Код товара: ${id}</p>
                    <p class="card__price js-cardLink">${price} кредитів</p>
                    <button class="card__add-to-cart js-addToCart" type="button">КУПИТИ</button>
                    <button class="card__add-to-favorite js-addToFavorit" type="button">ЗАПАМЯТАТИ</button>
                </a>
            </li>`;
    return acc;
  },

  ''
);
cardList.insertAdjacentHTML('beforeend', cardMarkup);

cardList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.target.classList.contains('js-addToCart')) {
    e.preventDefault();
    pushCurrentProduct(e, dataCart);

    if (dataCart.length) {
      cart.textContent = `У кошику ${dataCart.length} товарів`;
    }
  } else if (e.target.classList.contains('js-addToFavorit')) {
    e.preventDefault();
    pushCurrentProduct(e, dataFavorit);

    if (dataFavorit.length) {
      favorit.textContent = `В обраних ${dataFavorit.length} товарів`;
    }
  } else if (e.target.classList.contains('js-cardLink')) {
    console.log('click on link');

    console.log(e.defaultPrevented);
  }
  createCart();
  //
  const localDataCart = JSON.stringify(dataCart);
  console.log(localDataCart);
  localStorage.setItem('cartItem', localDataCart);
  const testData = localStorage.getItem('cartItem');
  console.log(testData);
  //
}

function pushCurrentProduct(e, data) {
  const currentProduct = e.target.closest('.js-product');
  const currentProductId = Number(currentProduct.dataset.productId);
  const addedProduct = { ...instruments.find(el => el.id === currentProductId), qty: 1 };
  const haveProduct = data.find(el => el.id === currentProductId);

  if (haveProduct) {
    haveProduct.qty += 1;
  } else {
    data.push(addedProduct);
  }
}

///////       CART(this will be a new page or modal)      //////////
function createCart() {
  const cartMarkup = dataCart.reduce(
    (acc, { id, img, name, price, descr, qty }) => {
      acc += `<li class="card js-product" data-product-id="${id}">
                <a class="card__link js-cardLink" href="./online-store-card.html">
                    <h2 class="card__name js-cardLink">${name}</h2>
                    <img class="card_img js-cardLink" src="${img}" alt="${name}" width="250">
                    <p class="card__descr js-cardLink">${descr}</p>
                    <p class="card__id js-cardLink">Код товара: ${id}</p>
                    <p class="card__qty js-cardLink">Кількість: ${qty}</p>
                    <p class="card__price js-cardLink">${price} кредитів</p>
                    <button class="card__add-to-cart js-addToCart" type="button">Видалити</button>
                    <button class="card__add-to-favorite js-addToFavorit" type="button">ЗАПАМЯТАТИ</button>
                </a>
            </li>`;
      return acc;
    },

    ''
  );

  cartList.innerHTML = cartMarkup;
}

///////       /CART(this will be a new page or modal)      //////////
