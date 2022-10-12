import { onShowBtnClick } from './getingUser.js';

export const initHandlers = () => {
  const showBtnElem = document.querySelector('.name-form__btn');
  showBtnElem.addEventListener('click', onShowBtnClick);
};
