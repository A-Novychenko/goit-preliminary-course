const content = document.querySelector('.game__content');

let markup = '';
let player = 'X';

const stepX = [];
const step0 = [];

for (let i = 1; i <= 9; i += 1) {
  markup += `<div class="game__item" data-id="${i}"></div>`;
}

content.innerHTML = markup;

content.addEventListener('click', onItemClick);

function onItemClick(e) {
  if (e.target.textContent) {
    return;
  }
  e.target.textContent = player;

  if (player === 'X') {
    stepX.push(e.target.dataset.id);
  } else {
    step0.push(e.target.dataset.id);
  }

  player = player === 'X' ? '0' : 'X';
  console.log('stepX', stepX);
  console.log('step0', step0);
}
