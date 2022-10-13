import { renderUserData } from './renderUserData.js';
import { fetchReposData, fetchUserData } from './usersGateway.js';
import { renderReposData } from './renderRepos.js';
import { hideSpinner, showSpinner } from './spinner.js';
import { clearData } from './clearData.js';

const inputElem = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

export const onUserSearch = () => {
  const userName = inputElem.value;
  clearData();
  showSpinner();
  fetchUserData(userName)
    .then(data => {
      renderUserData(data);
      return data.repos_url;
    })
    .then(url => fetchReposData(url))
    .then(reposList => renderReposData(reposList))
    .catch(err => alert(err.message))
    .finally(() => hideSpinner());
};

renderUserData(defaultUser);
const showBtnElem = document.querySelector('.name-form__btn');
showBtnElem.addEventListener('click', onUserSearch);
