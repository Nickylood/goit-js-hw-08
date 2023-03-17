
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');

let savedFilters = {};
initForm();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(e) {
    e.preventDefault();
    formEl.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    console.log(savedFilters)
}

function onFormInput(e) {
    savedFilters[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(savedFilters));
}

function initForm() {
    let savedFilters = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (savedFilters) {
        savedFilters.email ? formEl.email.value = savedFilters.email : formEl.email.value = '';
        savedFilters.message ? formEl.message.value = savedFilters.message : formEl.message.value = '';
    }
}

