const STORAGE_KEY = 'saveFormData';

const formData = {};

const refs = {
  form: document.querySelector('.js-feedback-form'),
  input: document.querySelector('.js-input-name'),
  textarea: document.querySelector('.js-feedback-form-textarea'),
};

refs.form.addEventListener('click', onFormSubmit);
// refs.textarea.addEventListener('input', _.throttle(onTextareaInput, 1000));
refs.form.addEventListener('input', onFormInput);

populate();

function onFormSubmit(e) {
  if (e.target.classList.contains('js-btn-submit')) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}

// function onTextareaInput(e) {
//   // const message = e.target.value;
//   // localStorage.setItem(STORAGE_KEY, message);
// }

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// function populateInput() {
//   const savedName = localStorage.getItem(STORAGE_KEY);
//   const nameObj = JSON.parse(savedName);
//   if (nameObj) {
//     refs.input.value = nameObj.name;
//   }
// }
function populate() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  console.log('savedData', savedData);
  const dataObj = JSON.parse(savedData);
  console.log('dataObj', dataObj);
  console.log(dataObj);

  // {name: 'adsfvwfvrtdbstredafbvwredav', message: 'wefvwrevwdavwrvervwt'}
  // {message: 'wefvwrevwdavwrvervwt'}
  // {name: 'adsfvwfvrtdbstredafbvwredav'}
  // {}

  if (dataObj) {
    if (dataObj.name) {
      refs.input.value = dataObj.name;
    }
  }

  if (dataObj) {
    if (dataObj.message) {
      refs.textarea.value = dataObj.message;
    }
  }
}
