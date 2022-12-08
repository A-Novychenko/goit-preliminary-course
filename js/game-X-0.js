const content = document.querySelector('.game__content');

let markup = '';
let player = 'X';

const stepX = [];
const step0 = [];
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [3, 5, 7],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];

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

  const id = Number(e.target.dataset.id);

  if (player === 'X') {
    stepX.push(id);
    iskWinner(stepX, player);

    return;
  } else {
    step0.push(id);
    iskWinner(step0, player);

    return;
  }

  player = player === 'X' ? '0' : 'X';
}

function checkWinner(arr) {
  return win.some(el => el.every(el => arr.includes(el)));
}

function iskWinner(step, player) {
  const isWin = checkWinner(step);
  if (isWin) {
    alert(`${player} is Winner!`);
    reset();
  }
}

function reset() {
  content.innerHTML = markup;
  stepX = [];
  stepX = [];
}
