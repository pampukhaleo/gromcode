const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

const randomDelay = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const delay = randomDelay(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, delay);
  });

export const getUserASAP = userId => {
  const usersUrl = servers.map(serverUrl => `${serverUrl}/${userId}`);

  const requests = usersUrl.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

// getUserASAP('user-id1').then(res => console.log(res));
