const STORAGE_KEY = 'feedback-msg';

const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  textarea: document.querySelector('.js-feedback-form-textarea'),
};

refs.form.addEventListener('click', onFormSubmit);
refs.textarea.addEventListener('input', _.throttle(onTextareaInput, 1000));
form.addEventListener('input', onFormInput);

populateTextarea();

function onFormSubmit(e) {
  if (e.target.classList.contains('js-btn-submit')) {
    e.preventDefault();
    console.log('Submit form');
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    localStorage.setItem('saveFormData', JSON.stringify(formData));
  }
}

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function onFormInput(e) {
  formData[e.target.name] = e.taget.value;
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
