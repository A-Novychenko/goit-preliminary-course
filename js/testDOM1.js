import products from './data/proucts.js';

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

/*
 * Пишем функцию для создания карточки продукта(объект в папке data)
 */

const makeProdCard = products => {
  return products.map(product => {
    const cardSectionRef = document.createElement('article');
    cardSectionRef.classList.add('product__name');

    const cardTitleRef = document.createElement('h2');
    cardTitleRef.classList.add('product__name');
    cardTitleRef.textContent = product.name;

    const cardDescrRef = document.createElement('p');
    cardDescrRef.classList.add('product__descr');
    cardDescrRef.textContent = product.description;

    const cardPriseRef = document.createElement('p');
    cardPriseRef.classList.add('product__pridct');
    cardPriseRef.textContent = `Цена: ${product.price} кредитов`;

    cardSectionRef.append(cardTitleRef, cardDescrRef, cardPriseRef);
    return cardSectionRef;
  });
};

const arrprodCard = makeProdCard(products);

const prodCardRef = document.querySelector('.js-prod-card');
prodCardRef.append(...arrprodCard);
