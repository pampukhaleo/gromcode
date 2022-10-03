const counterContainerElem = document.querySelector('.container');
const counterElem = document.querySelector('.counter__value');

const onCounterChange = e => {
  const isBtn = e.target.classList.contains('counter__button');
  if (!isBtn) {
    return;
  }

  const { action } = e.target.dataset;

  const oldValue = Number(counterElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  counterElem.textContent = newValue;

  localStorage.setItem('counter', newValue);
};

counterContainerElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  counterElem.textContent = e.newValue;
};

window.addEventListener('storage', onStorageChange);

const onContentLoad = () => {
  counterElem.textContent = localStorage.getItem('counter');
};

document.addEventListener('DOMContentLoaded', onContentLoad);
