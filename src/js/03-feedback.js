const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const submit = document.querySelector(`[type='submit']`);
const email = document.querySelector(`[name='email']`);
const message = document.querySelector(`[name='message']`);

form.addEventListener('input', throttle(onInput, 500));
submit.addEventListener('click', onSubmit);

setInput();

function setInput() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  try {
    if (!data) throw 'error';
    email.value = data.email;
    message.value = data.message;
  } catch (error) {}
}

function onInput(e) {
  let data = {};
  data.email = email.value;
  data.message = message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');

  email.value = '';
  message.value = '';
}
