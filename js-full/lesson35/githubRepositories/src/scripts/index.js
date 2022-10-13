import { initHandlers } from './actions.js';
import { renderUserData } from './renderUserData.js';

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

renderUserData(defaultUser);

window.addEventListener('DOMContentLoaded', () => {
  initHandlers();
});
