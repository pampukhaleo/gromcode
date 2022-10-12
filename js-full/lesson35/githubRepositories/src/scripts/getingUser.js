import { getUser } from './usersGateway.js';
import { renderer } from './renderer.js';

const inputElem = document.querySelector('.name-form__input');
const spinnerElem = document.querySelector('.spinner');

export const onShowBtnClick = () => {
  const userName = inputElem.value;
  Promise.resolve(spinnerElem.classList.remove('spinner_hidden'))
    .then(() => getUser(userName).then(data => renderer(data)))
    .catch(e => console.log(e.name))
    .then(() => spinnerElem.classList.add('spinner_hidden'));
};
