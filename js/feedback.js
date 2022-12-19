const form = document.querySelector('.feedback-form');
const inputMail = document.querySelector('.feedback-form input');
const inputText = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

const isThereDataInStorage = localStorage.getItem(STORAGE_KEY);
let localData = JSON.parse(isThereDataInStorage) || {};

form.addEventListener('input', _.throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

if (isThereDataInStorage) {
  if (localData.email) {
    inputMail.value = localData.email;
  }
  if (localData.message) {
    inputText.value = localData.message;
  }
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...localData, ...formData }));
}

function onFormSubmit(e) {
  e.preventDefault();
  if (inputMail.value === '' || inputText.value === '') {
    alert('Заповніть всі поля!');
    return;
  }

  const { email, message } = e.currentTarget.elements;
  console.log({
    email: email.value,
    message: message.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  localData = {};
  formData = {};
  e.currentTarget.reset();
}
