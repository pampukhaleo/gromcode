import { getRepos } from './usersGateway.js';

export const findRepository = url => {
  return getRepos(url);
};
