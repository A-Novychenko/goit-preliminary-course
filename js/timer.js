const timeValue = document.querySelector('.js-time-value');
const btn = document.querySelector('.time-btn');
const continueBtn = document.querySelector('.js-continue');
const stopBtn = document.querySelector('.js-stop');
const refreshBtn = document.querySelector('.js-refresh');
const form = document.querySelector('.js-form-time');
const inputForm = document.querySelector('.js-input-time');
const beginBtn = document.querySelector('.js-begin');

let startTime = 1;
let timerId = null;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  startTime = Number(e.target.elements.startTime.value);
  start();
  e.currentTarget.reset();
  beginBtn.setAttribute('disabled', 'disabled');
  inputForm.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');
  stopBtn.classList.toggle('timer-start-disabled');
  refreshBtn.removeAttribute('disabled');
  refreshBtn.classList.toggle('timer-start-disabled');
}

function start() {
  timerId = setInterval(() => {
    startTime -= 1;
    timeValue.textContent = startTime;
    if (!startTime) {
      stop();
      beginBtn.removeAttribute('disabled');
    }
  }, 1000);
}

function stop() {
  clearInterval(timerId);
}

function refresh() {
  clearInterval(timerId);
}

btn.addEventListener('click', onBtnClik);

function onBtnClik(e) {
  if (e.target.classList.contains('js-continue')) {
    continueBtn.setAttribute('disabled', 'enabled');
    continueBtn.classList.toggle('timer-start-disabled');

    stopBtn.removeAttribute('disabled');
    stopBtn.classList.toggle('timer-start-disabled');

    start();
    return;
  }

  if (e.target.classList.contains('js-stop')) {
    continueBtn.removeAttribute('disabled');
    continueBtn.classList.toggle('timer-start-disabled');

    stopBtn.setAttribute('disabled', 'enabled');
    stopBtn.classList.toggle('timer-start-disabled');

    stop();
    return;
  }

  if (e.target.classList.contains('js-refresh')) {
    const isRunning = continueBtn.classList.contains('timer-start-disabled');

    refreshBtn.setAttribute('disabled', 'disabled');
    refreshBtn.classList.toggle('timer-start-disabled');
    beginBtn.removeAttribute('disabled');
    inputForm.removeAttribute('disabled');

    if (isRunning) {
      stopBtn.classList.toggle('timer-start-disabled');
      stopBtn.setAttribute('disabled', 'enabled');
    } else {
      continueBtn.classList.toggle('timer-start-disabled');
      continueBtn.setAttribute('disabled', 'enabled');
    }

    timeValue.textContent = 0;
    refresh();
    return;
  }
}
