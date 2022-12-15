const localDataCart = localStorage.getItem('cartItem');
const dataCart = JSON.parse(localDataCart);
console.log(dataCart);

const cartList = document.querySelector('.js-cart-list');

if (localDataCart) {
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

  cartList.innerHTML =
    cartMarkup + '<button type="button" class="js-clean"> Очмстити кошик</button>';

  const btnClean = document.querySelector('.js-clean');
  btnClean.addEventListener('click', onBtnClick);

  function onBtnClick() {
    localStorage.removeItem('cartItem');
    console.log(localStorage.getItem('cartItem'));
    cartList.innerHTML = '';
  }
}
