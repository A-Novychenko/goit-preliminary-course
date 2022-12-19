const content = document.querySelector(".game__content");
const modalBackdrop = document.querySelector("[data-modal]");
const modal = document.querySelector(".js-modal");
const modalClose = document.querySelector("[data-modal-close]");
const modalContent = document.createElement("p");

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

let markup = "";
let player = "X";

modal.append(modalContent);

for (let i = 1; i <= 9; i += 1) {
  markup += `<div class="game__item js-X-0-item" data-id="${i}"></div>`;
}

content.innerHTML = markup;

content.addEventListener("click", onItemClick);

function onItemClick(e) {
  if (e.target.textContent) {
    return;
  }
  const freeElements = document.querySelectorAll(".js-X-0-item");
  const elem = [...freeElements];

  const id = Number(e.target.dataset.id);

  if (player === "X") {
    e.target.textContent = player;
    stepX.push(id);
    const isWin = checkWinner(stepX);

    if (isWin) {
      modalAlert("X is Winner!");
      checkWinnerNumbers(stepX, elem);

      return;
    }
  }

  const freeElemArr = [...freeElements].filter((el) => el.textContent === "");
  const freeElQty = freeElemArr.length;
  const rendom = Math.floor(Math.random() * freeElQty);

  if (freeElemArr.length) {
    freeElemArr[rendom].textContent = 0;
    step0.push(Number(freeElemArr[rendom].dataset.id));
  }

  const isWin = checkWinner(step0);

  if (isWin) {
    modalAlert("0 is Winner!");
    checkWinnerNumbers(step0, elem);
    return;
  }

  if (stepX.length === 5) {
    modalAlert("DRAW");

    return;
  }
}

function checkWinner(arr) {
  return win.some((el) => el.every((el) => arr.includes(el)));
}

function checkWinnerNumbers(arr, elem) {
  const winNumbers = [...win]
    .filter((el) => el.every((el) => arr.includes(el)))
    .flat(2);
  for (const el of elem) {
    const elId = Number(el.dataset.id);
    if (winNumbers.includes(elId)) {
      el.classList.add("current");
    }
  }

  return winNumbers;
}

function reset() {
  content.innerHTML = markup;
  player = "X";
  stepX = [];
  step0 = [];
}

modalClose.addEventListener("click", onModalClose);
function onModalClose(e) {
  modalBackdrop.classList.toggle("is-hidden");
  reset();
}

function modalAlert(result) {
  modalBackdrop.classList.toggle("is-hidden");
  modalContent.textContent = `${result}`;
}
