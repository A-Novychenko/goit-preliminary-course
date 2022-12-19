const timeValue = document.querySelector('.js-time-value');
const btn = document.querySelector('.time-btn');
const continueBtn = document.querySelector('.js-continue');
const stopBtn = document.querySelector('.js-stop');
const refreshBtn = document.querySelector('.js-refresh');
const form = document.querySelector('.js-form-time');
const inputForm = document.querySelector('.js-input-time');
const beginBtn = document.querySelector('.js-begin');
const label = document.querySelector('.js-start-time-label');

let startTime = 1;
let timerId = null;

form.addEventListener('submit', onFormSubmit);
btn.addEventListener('click', onBtnClik);

function onFormSubmit(e) {
  e.preventDefault();
  startTime = Number(e.target.elements.startTime.value);
  timeValue.textContent = startTime;
  e.currentTarget.reset();
  start();

  beginBtn.setAttribute('disabled', 'disabled');
  inputForm.setAttribute('disabled', 'disabled');
  stopBtn.removeAttribute('disabled');
  stopBtn.classList.toggle('timer-start-disabled');
  refreshBtn.removeAttribute('disabled');
  refreshBtn.classList.toggle('timer-start-disabled');

  beginBtn.classList.toggle('btn-hidden');
  continueBtn.classList.toggle('btn-hidden');
  timeValue.classList.toggle('btn-hidden');
  inputForm.classList.toggle('btn-hidden');
  label.classList.toggle('label-hidden');
}

function onBtnClik(e) {
  if (e.target.classList.contains('js-continue')) {
    countdownСontinues();
    start();
    return;
  }

  if (e.target.classList.contains('js-stop')) {
    stop();
    return;
  }

  if (e.target.classList.contains('js-refresh')) {
    refresh();
    return;
  }
}

function start() {
  timerId = setInterval(() => {
    startTime -= 1;

    timeValue.textContent = startTime;
    if (!startTime) {
      alert('Час вийшов!!! (Замість alert буде модальне вікно)');
      stop();
      refresh();
    }
  }, 1000);
}

function countdownСontinues() {
  continueBtn.setAttribute('disabled', 'enabled');
  continueBtn.classList.toggle('timer-start-disabled');

  stopBtn.removeAttribute('disabled');
  stopBtn.classList.toggle('timer-start-disabled');
}

function stop() {
  clearInterval(timerId);
  continueBtn.removeAttribute('disabled');
  continueBtn.classList.toggle('timer-start-disabled');

  stopBtn.setAttribute('disabled', 'enabled');
  stopBtn.classList.toggle('timer-start-disabled');
}

function refresh() {
  clearInterval(timerId);
  const isRunning = continueBtn.classList.contains('timer-start-disabled');

  refreshBtn.setAttribute('disabled', 'disabled');
  refreshBtn.classList.toggle('timer-start-disabled');
  beginBtn.removeAttribute('disabled');
  inputForm.removeAttribute('disabled');
  beginBtn.classList.toggle('btn-hidden');
  continueBtn.classList.toggle('btn-hidden');
  timeValue.classList.toggle('btn-hidden');
  inputForm.classList.toggle('btn-hidden');
  label.classList.toggle('label-hidden');

  if (isRunning) {
    stopBtn.classList.toggle('timer-start-disabled');
    stopBtn.setAttribute('disabled', 'enabled');
  } else {
    continueBtn.classList.toggle('timer-start-disabled');
    continueBtn.setAttribute('disabled', 'enabled');
  }
}
