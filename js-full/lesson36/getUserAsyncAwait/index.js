export const fetchUser = async userId => {
  // put your code here
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

// fetchUser('github').catch(err => console.log(err.message));
