const baseUrl = 'https://api.github.com/users';

export const getUser = userName => {
  return fetch(`${baseUrl}/${userName}`, {
    method: 'GET',
  })
    .then(response => response.json())
    .catch(() => alert(new Error('Failed to load data')));
};

export const getRepos = reposUrl => {
  return fetch(reposUrl)
    .then(response => response.json())
    .catch(() => alert(new Error('Failed to load data')));
};
