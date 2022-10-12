import { getUser } from './usersGateway.js';
import { renderer } from './renderer.js';

const inputElem = document.querySelector('.name-form__input');

export const onShowBtnClick = () => {
  const userName = inputElem.value;
  getUser(userName).then(data => renderer(data));
};
