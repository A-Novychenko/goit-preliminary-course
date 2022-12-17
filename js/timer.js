const timeValue = document.querySelector('.js-time-value');
const btn = document.querySelector('.time-btn');

const startTime = 0;
const endTime = 10000;
let currentTime = 0;
let timerId = null;

btn.addEventListener('click', onBtnClik);

function onBtnClik(e) {
  if (e.target.classList.contains('js-start')) {
    start();
    return;
  }
  if (e.target.classList.contains('js-stop')) {
    stop();
  }
  if (e.target.classList.contains('js-refresh')) {
  }
}

function start() {
  timerId = setInterval(() => {
    currentTime += 1;
    timeValue.textContent = currentTime;
    console.log(`Current time: ${currentTime}`);
  }, 1000);
}
function stop() {
  clearInterval(timerId);
}
