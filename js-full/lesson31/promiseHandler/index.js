/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = (userId) => new Promise((resolve, reject) => {
  if (userId === 'broken') {
    setTimeout(() => {
      reject(new Error('UserMenu not found'));
    }, 500);
  } else {
    setTimeout(() => {
      resolve({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
      });
    }, 1000);
  }
});

// requestUserData('userid777')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
