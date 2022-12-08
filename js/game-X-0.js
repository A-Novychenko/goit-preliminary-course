// const content = document.querySelector('.game__content');

// let markup = '';
// let player = 'X';

// let stepX = [];
// let step0 = [];
// const win = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 5, 9],
//   [3, 5, 7],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
// ];

// for (let i = 1; i <= 9; i += 1) {
//   markup += `<div class="game__item" data-id="${i}"></div>`;
// }

// content.innerHTML = markup;

// content.addEventListener('click', onItemClick);

// function onItemClick(e) {
//   if (e.target.textContent) {
//     return;
//   }

//   e.target.textContent = player;

//   const id = Number(e.target.dataset.id);

//   if (player === 'X') {
//     stepX.push(id);
//     const isWin = checkWinner(stepX);

//     if (isWin) {
//       alert(`${player} is Winner!`);
//       reset();

//       return;
//     }
//   } else {
//     step0.push(id);
//     const isWin = checkWinner(step0);

//     if (isWin) {
//       alert(`${player} is Winner!`);
//       reset();

//       return;
//     }
//   }

//   player = player === 'X' ? '0' : 'X';
// }

// function checkWinner(arr) {
//   return win.some(el => el.every(el => arr.includes(el)));
// }

// function reset() {
//   content.innerHTML = markup;
//   player = 'X';
//   stepX = [];
//   step0 = [];
// }

////////////////////////////////////////////////////////////////////////

const content = document.querySelector('.game__content');
const modal = document.querySelector('[data-modal]');
const modalClose = document.querySelector('[data-modal-close]');

let markup = '';
let player = 'X';

let stepX = [];
let step0 = [];
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
  markup += `<div class="game__item js-X-0-item" data-id="${i}"></div>`;
}

content.innerHTML = markup;

content.addEventListener('click', onItemClick);

function onItemClick(e) {
  if (e.target.textContent) {
    return;
  }

  const id = Number(e.target.dataset.id);

  if (player === 'X') {
    e.target.textContent = player;
    stepX.push(id);
    const isWin = checkWinner(stepX);

    if (isWin) {
      alert(`${player} is Winner!`);
      reset();

      return;
    }
  }

  const freeElements = document.querySelectorAll('.js-X-0-item');
  const freeElemArr = [...freeElements].filter(el => el.textContent === '');
  const freeElQty = freeElemArr.length;
  const rendom = Math.floor(Math.random() * freeElQty);

  if (freeElemArr.length) {
    freeElemArr[rendom].textContent = 0;
    step0.push(Number(freeElemArr[rendom].dataset.id));
  }

  const isWin = checkWinner(step0);

  if (isWin) {
    alert(`0 is Winner!`);
    reset();

    return;
  }

  if (stepX.length === 5) {
    // alert(`=== draw ===`);
    modal.classList.toggle('is-hidden');

    reset();
    return;
  }
}

function checkWinner(arr) {
  return win.some(el => el.every(el => arr.includes(el)));
}

function reset() {
  content.innerHTML = markup;
  player = 'X';
  stepX = [];
  step0 = [];
}

//close modal
modalClose.addEventListener('click', onModalClose);
function onModalClose(e) {
  e.currentTarget.classList.toggle('is-hidden');
}
