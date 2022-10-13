/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async users => {
  // put your code here
  const blogList = users.map(async userName => {
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const { blog } = await response.json();
    return blog;
  });

  return blogList;
};

// getUsersBlogs('facebook').then(data => console.log(data));

// examples
// getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList)); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
// getUsersBlogs(['microsoft']).then(linksList => console.log('li', linksList)); // ==> ["https://opensource.microsoft.com"]
