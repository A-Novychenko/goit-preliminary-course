const timeValue = document.querySelector('.js-time-value');
const btn = document.querySelector('.time-btn');
const startBtn = document.querySelector('.js-start');
const stopBtn = document.querySelector('.js-stop');

const startTime = 0;
const endTime = 10000;
let currentTime = 0;
let timerId = null;

btn.addEventListener('click', onBtnClik);

function onBtnClik(e) {
  if (e.target.classList.contains('js-start')) {
    startBtn.setAttribute('disabled', 'enabled');
    startBtn.classList.toggle('timer-start-disabled');

    stopBtn.removeAttribute('disabled');
    stopBtn.classList.toggle('timer-start-disabled');

    start();
    return;
  }

  if (e.target.classList.contains('js-stop')) {
    startBtn.removeAttribute('disabled');
    startBtn.classList.toggle('timer-start-disabled');
    startBtn.textContent = 'Continue';

    stopBtn.setAttribute('disabled', 'enabled');
    stopBtn.classList.toggle('timer-start-disabled');

    stop();
    return;
  }

  if (e.target.classList.contains('js-refresh')) {
    const isRunning = startBtn.classList.contains('timer-start-disabled');

    if (isRunning) {
      startBtn.classList.toggle('timer-start-disabled');
      startBtn.removeAttribute('disabled');

      stopBtn.classList.toggle('timer-start-disabled');
      stopBtn.setAttribute('disabled', 'enabled');
    }

    currentTime = 0;
    timeValue.textContent = 0;
    startBtn.textContent = 'Start';
    refresh();
    return;
  }
}

function start() {
  timerId = setInterval(() => {
    currentTime += 1;
    timeValue.textContent = currentTime;
  }, 1000);
}

function stop() {
  clearInterval(timerId);
}

function refresh() {
  clearInterval(timerId);
}
