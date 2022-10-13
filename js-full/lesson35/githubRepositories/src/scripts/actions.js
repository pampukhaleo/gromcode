import { onUserSearch } from './onUserSearch.js';

export const initHandlers = () => {
  const showBtnElem = document.querySelector('.name-form__btn');
  showBtnElem.addEventListener('click', onUserSearch);
};
