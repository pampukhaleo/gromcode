'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const p = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => {
        reject(new Error('User not found'))
      }, 500)
    } else {
      setTimeout(() => {
        resolve({
          name: 'John',
          age: 17,
          userId,
          email: 'userid777@example.com',
        })
      }, 1000)
    }
  })

  return p
}

// requestUserData('broken')
//   .then(data => console.log(data))
//   .catch(error => console.log(error))