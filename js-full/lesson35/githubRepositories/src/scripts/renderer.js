import { findRepository } from './getingRepos.js';

const avatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const repoListElem = document.querySelector('.repo-list');

const avatarBaseUrl = 'https://avatars3.githubusercontent.com/u10001';
avatarElem.src = avatarBaseUrl;

export const renderer = ({ avatar_url, name, location, repos_url }) => {
  avatarElem.src = avatar_url;
  userNameElem.textContent = name;
  locationElem.textContent = location ? `from ${location}` : '';

  findRepository(repos_url).then(data =>
    data.map(repo => {
      repoListElem.innerHTML = `<span class='.repo-list'>${repo.name}<span>`;
    }),
  );
};
