const baseUrl = 'https://63453f7539ca915a69f9a53e.mockapi.io/api/v1/users';

export function getUsersList() {
  // put your code here
  return fetch(baseUrl).then(response => response.json());
}

export function getUserById(userId) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`).then(response => response.json());
}

export function createUser(userData) {
  // put your code here
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

export function deleteUser(userId) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  });
}

export function updateUser(userId, userData) {
  // put your code here
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

// examples
// getUsersList().then(weather => {
//   console.log(weather); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById('2').then(userData => {
//   console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

// const newUserData = {
//   email: 'cool@email.com',
//   firstName: 'Iron',
//   lastName: 'Man',
//   age: 42,
// };

// createUser(newUserData).then(() => {
//   console.log('UserMenu created');
// });
//
// const updatedUserData = {
//   email: 'new@email.com',
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 17,
// };

// updateUser('1', updatedUserData).then(() => {
//   console.log('UserMenu updated');
// });
//
// deleteUser('2').then(() => {
//   console.log('UserMenu updated');
// });
